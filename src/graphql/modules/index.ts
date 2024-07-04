import { createApplication } from "graphql-modules";
import { starsModule } from "./stars";

export const gqlApp = createApplication({
    modules: [starsModule]
});
