import { EntityInfo } from "./entityinfo.entity";
import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
export declare class Symptom {
    id: number;
    type: string;
    info: EntityInfo;
    medicines: Medicine[];
    constructor(name: string, description: string, type: string);
}
