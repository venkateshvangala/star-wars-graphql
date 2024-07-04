import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { noop } from "lodash";
import { gqlApp } from "./modules";
import depthLimit from "graphql-depth-limit";

export const getGraphQlServer = (server: any) => {
    return new ApolloServer<any>({
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
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer: server })]
    });
};
