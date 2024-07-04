import { fetchAllFilmsResolver, fetchFilmByIdResolver } from "./films.resolver";

const StarsResolvers = {
    Query: {
        fetchAllFilms: fetchAllFilmsResolver,
        fetchFilmById: fetchFilmByIdResolver
    }
};

export default StarsResolvers;
