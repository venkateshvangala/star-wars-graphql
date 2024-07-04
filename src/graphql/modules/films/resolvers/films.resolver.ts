import { FilmsListResponse, FilmsResponse } from "src/graphql/__generated__/gql-ts-types";
import { FilmsProvider } from "../providers/films.provider";

export const fetchAllFilmsResolver = async (_: unknown, args: any, context: any): Promise<FilmsListResponse> => {
    const starsService = context?.injector?.get(FilmsProvider.provide);
    const data = await starsService.fetchAllStars();
    return data;
};

export const fetchFilmByIdResolver = async (_: unknown, { id }: any, context: any): Promise<FilmsResponse> => {
    const starsService = context?.injector?.get(FilmsProvider.provide);
    const data = await starsService.fetchStarById(id);
    return data;
};
