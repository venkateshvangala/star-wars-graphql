import { VehiclesListResponse, VehiclesResponse } from "src/graphql/__generated__/gql-ts-types";
import { VehiclesProvider } from "../providers/vehicles.provider";

export const fetchAllVehiclesResolver = async (_: unknown, args: any, context: any): Promise<VehiclesListResponse> => {
    const vehicleService = context?.injector?.get(VehiclesProvider.provide);
    const data = await vehicleService.fetchAllVehicles();
    return data;
};

export const fetchVehiclesByIdResolver = async (_: unknown, { id }: any, context: any): Promise<VehiclesResponse> => {
    const vehicleService = context?.injector?.get(VehiclesProvider.provide);
    const data = await vehicleService.fetchVehicleById(id);
    return data;
};
