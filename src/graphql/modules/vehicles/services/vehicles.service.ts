import { Injectable } from "graphql-modules";
import axios from "axios";
import { StarsListResponse, StarsResponse } from "src/graphql/__generated__/gql-ts-types";
import { get } from "lodash";

@Injectable()
export class VehiclesService {
    fetchAllVehicles = async (payload: any): Promise<StarsListResponse> => {
        try {
            const response = await axios.get("https://swapi.info/api/vehicles");
            return get(response, "data", []);
        } catch (error: any) {
            throw error;
        }
    };

    fetchVehicleById = async (id: string): Promise<StarsResponse> => {
        try {
            const response = await axios.get(`https://swapi.info/api/vehicles/${id}`);
            return get(response, "data", {});
        } catch (error: any) {
            throw error;
        }
    };
}
