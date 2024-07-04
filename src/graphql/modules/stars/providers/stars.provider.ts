import { StarsService } from "../services/stars.service";

export const StarsProvider = {
    provide: StarsService,
    useClass: StarsService
};
