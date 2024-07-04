import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { join } from "path";
import { FilmsProvider } from "./providers/films.provider";

const filmsTypeDefinations = loadFilesSync(join(__dirname, "./gqlTypes/*.(graphql)"));
const filmsResolvers = loadFilesSync(join(__dirname, "./resolvers/index.(ts|js)"));

export const filmsModule = createModule({
    id: "films-module",
    dirname: __dirname,
    typeDefs: filmsTypeDefinations,
    resolvers: filmsResolvers,
    providers: [FilmsProvider]
});
