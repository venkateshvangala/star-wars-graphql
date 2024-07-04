import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { join } from "path";
import { VehiclesProvider } from "./providers/vehicles.provider";

const vehiclesTypeDefinations = loadFilesSync(join(__dirname, "./gqlTypes/*.(graphql)"));
const vehiclesResolvers = loadFilesSync(join(__dirname, "./resolvers/index.(ts|js)"));

export const vehiclesModule = createModule({
    id: "vehicles-module",
    dirname: __dirname,
    typeDefs: vehiclesTypeDefinations,
    resolvers: vehiclesResolvers,
    providers: [VehiclesProvider]
});
