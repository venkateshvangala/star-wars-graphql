import {
    PlanetsListResponse,
    PlanetsResponse,
    StarsListResponse,
    StarsResponse
} from "src/graphql/__generated__/gql-ts-types";
import { PlanetsProvider } from "../providers/planets.provider";

export const fetchAllStarsResolver = async (_: unknown, args: any, context: any): Promise<PlanetsListResponse> => {
    const starsService = context?.injector?.get(PlanetsProvider.provide);
    const data = await starsService.fetchAllStars();
    return data;
};

export const fetchPlanetByIdResolver = async (_: unknown, { id }: any, context: any): Promise<PlanetsResponse> => {
    const starsService = context?.injector?.get(PlanetsProvider.provide);
    const data = await starsService.fetchStarById(id);
    return data;
};
