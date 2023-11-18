import { EntityInfo } from "./entityinfo.entity";
import { Symptom } from "./symptom.entity";
export declare class UserSymptom {
    id: number;
    duration: number;
    intensity: number;
    info: EntityInfo;
    baseSymptom: Symptom;
    constructor(name: string, description: string, duration: number, intensity: number);
}
