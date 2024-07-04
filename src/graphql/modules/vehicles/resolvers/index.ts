import { fetchAllVehiclesResolver, fetchVehiclesByIdResolver } from "./vehicles.resolver";

const StarsResolvers = {
    Query: {
        fetchAllVehicles: fetchAllVehiclesResolver,
        fetchVehiclesById: fetchVehiclesByIdResolver
    }
};

export default StarsResolvers;
