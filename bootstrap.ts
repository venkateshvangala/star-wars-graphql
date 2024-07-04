import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import { gqlApp } from "./src/graphql/modules";
import { noop } from "lodash";
import { expressMiddleware } from "@apollo/server/express4";
import depthLimit from "graphql-depth-limit";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

export const bootstrap = async () => {
    const app = express();
    const httpServer = http.createServer(app);

    // cors for all endpoints
    app.use(cors<cors.CorsRequest>());

    // body parser for all endpoints
    app.use(bodyParser.json({ limit: "10mb" }));

    app.get("/", (req, res) => {
        res.json({
            message: "welcome to Start Wars App."
        });
    });

    const server = new ApolloServer<any>({
        gateway: {
            async load() {
                return { executor: gqlApp.createApolloExecutor() };
            },
            onSchemaLoadOrUpdate(callback) {
                callback({ apiSchema: gqlApp.schema } as never);
                return () => {
                    noop();
                };
            },
            async stop() {
                noop();
            }
        },
        introspection: process.env.NODE_ENV !== "production",

        validationRules: [depthLimit(10)], // keeping a depth of 10 nested queries for security
        includeStacktraceInErrorResponses: "production" !== process.env.NODE_ENV,
        formatError: (err) => ({
            message: err.message,
            success: false
        }),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();
    app.use("/api/xapi", cors<cors.CorsRequest>(), bodyParser.json({ limit: "10mpb" }), expressMiddleware(server, {}));

    app.use("*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
        next({ message: "The requested route does not exist" });
    });

    const port = process.env.PORT || 8080;

    httpServer
        .listen({ port }, () => {
            console.log(`🚀 Server ready at: http://localhost:${port} 🚀`);
        })
        .setTimeout(1000 * 60 * 1);
};
