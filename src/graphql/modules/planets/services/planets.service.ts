import { Injectable } from "graphql-modules";
import axios from "axios";
import { PlanetsListResponse, StarsListResponse, StarsResponse } from "src/graphql/__generated__/gql-ts-types";
import { get } from "lodash";

@Injectable()
export class PlanetsService {
    fetchAllStars = async (payload: any): Promise<PlanetsListResponse> => {
        try {
            const response = await axios.get("https://swapi.info/api/planets");
            return get(response, "data", []);
        } catch (error: any) {
            throw error;
        }
    };

    fetchStarById = async (id: string): Promise<PlanetsService> => {
        try {
            const response = await axios.get(`https://swapi.info/api/planets/${id}`);
            return get(response, "data", {});
        } catch (error: any) {
            throw error;
        }
    };
}
