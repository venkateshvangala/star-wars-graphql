import { StarsListResponse, StarsResponse } from "src/graphql/__generated__/gql-ts-types";
import { StarsProvider } from "../providers/stars.provider";

export const fetchAllStarsResolver = async (_: unknown, args: any, context: any): Promise<StarsListResponse> => {
    const starsService = context?.injector?.get(StarsProvider.provide);
    const data = await starsService.fetchAllStars();
    return data;
};

export const fetchStarByIdResolver = async (_: unknown, { id }: any, context: any): Promise<StarsResponse> => {
    const starsService = context?.injector?.get(StarsProvider.provide);
    const data = await starsService.fetchStarById(id);
    return data;
};
