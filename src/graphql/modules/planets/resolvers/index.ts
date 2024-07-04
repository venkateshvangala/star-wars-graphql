import { fetchAllStarsResolver, fetchPlanetByIdResolver } from "./planets.resolver";

const StarsResolvers = {
    Query: {
        fetchAllPlanets: fetchAllStarsResolver,
        fetchPlanetById: fetchPlanetByIdResolver
    }
};

export default StarsResolvers;
