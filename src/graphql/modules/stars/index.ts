import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { join } from "path";
import { StarsProvider } from "./providers/stars.provider";

const starsTypeDefinations = loadFilesSync(join(__dirname, "./gqlTypes/*.(graphql)"));
const starsResolvers = loadFilesSync(join(__dirname, "./resolvers/index.(ts|js)"));

export const starsModule = createModule({
    id: "stars-module",
    dirname: __dirname,
    typeDefs: starsTypeDefinations,
    resolvers: starsResolvers,
    providers: [StarsProvider]
});
