import { createApplication } from "graphql-modules";
import { starsModule } from "./stars";
import { planetsModule } from "./planets";
import { filmsModule } from "./films";
import { vehiclesModule } from "./vehicles";
export const gqlApp = createApplication({
    modules: [starsModule, planetsModule, filmsModule, vehiclesModule]
});
