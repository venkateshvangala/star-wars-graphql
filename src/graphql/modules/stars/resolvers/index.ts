import { fetchAllStarsResolver, fetchStarByIdResolver } from "./stars.resolver";

const StarsResolvers = {
    Query: {
        fetchAllStars: fetchAllStarsResolver,
        fetchStartById: fetchStarByIdResolver
    }
};

export default StarsResolvers;
