import { FilmsService } from "../services/films.service";

export const FilmsProvider = {
    provide: FilmsService,
    useClass: FilmsService
};
