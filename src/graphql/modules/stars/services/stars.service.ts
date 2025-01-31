import { Injectable } from "graphql-modules";
import axios from "axios";
import { StarsListResponse, StarsResponse } from "src/graphql/__generated__/gql-ts-types";
import { get } from "lodash";

@Injectable()
export class StarsService {
    fetchAllStars = async (payload: any): Promise<StarsListResponse> => {
        try {
            const response = await axios.get("https://swapi.info/api/people");
            return get(response, "data", []);
        } catch (error: any) {
            throw error;
        }
    };

    fetchStarById = async (id: string): Promise<StarsResponse> => {
        try {
            const response = await axios.get(`https://swapi.info/api/people/${id}`);
            return get(response, "data", {});
        } catch (error: any) {
            throw error;
        }
    };
}
