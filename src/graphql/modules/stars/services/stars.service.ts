import { Injectable } from "graphql-modules";

@Injectable()
export class StarsService {
    fetchAllStars = async (payload: any): Promise<any> => {
        try {
            return ["va", "dd"];
        } catch (error: any) {
            throw error;
        }
    };
}
