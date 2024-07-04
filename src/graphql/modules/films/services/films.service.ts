import axios from "axios";
import { Injectable } from "graphql-modules";
import { get } from "lodash";
import { FilmsListResponse } from "src/graphql/__generated__/gql-ts-types";

@Injectable()
export class FilmsService {
    fetchAllStars = async (payload: any): Promise<FilmsListResponse> => {
        try {
            const response = await axios.get("https://swapi.info/api/films");
            return get(response, "data", []);
        } catch (error: any) {
            throw error;
        }
    };

    fetchStarById = async (id: string): Promise<FilmsService> => {
        try {
            const response = await axios.get(`https://swapi.info/api/films/${id}`);
            return get(response, "data", {});
        } catch (error: any) {
            throw error;
        }
    };
}
