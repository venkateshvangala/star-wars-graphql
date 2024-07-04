import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { join } from "path";
import { PlanetsProvider } from "./providers/planets.provider";

const planetsTypeDefinations = loadFilesSync(join(__dirname, "./gqlTypes/*.(graphql)"));
const planetsResolvers = loadFilesSync(join(__dirname, "./resolvers/index.(ts|js)"));

export const planetsModule = createModule({
    id: "planets-module",
    dirname: __dirname,
    typeDefs: planetsTypeDefinations,
    resolvers: planetsResolvers,
    providers: [PlanetsProvider]
});
