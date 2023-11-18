import { EntityInfo } from "./entityinfo.entity";
import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
export declare class Illness {
    id: number;
    info: EntityInfo;
    medicines: Medicine[];
    constructor(name: string, description: string);
}
