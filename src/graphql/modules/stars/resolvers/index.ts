import { fetchAllStarsResolver } from "./stars.resolver";

const StarsResolvers = {
    Query: {
        fetchAllStars: fetchAllStarsResolver
    }
};

export default StarsResolvers;
