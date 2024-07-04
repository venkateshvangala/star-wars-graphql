import { VehiclesService } from "../services/vehicles.service";

export const VehiclesProvider = {
    provide: VehiclesService,
    useClass: VehiclesService
};
