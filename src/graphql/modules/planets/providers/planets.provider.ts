import { PlanetsService } from "../services/planets.service";

export const PlanetsProvider = {
    provide: PlanetsService,
    useClass: PlanetsService
};
