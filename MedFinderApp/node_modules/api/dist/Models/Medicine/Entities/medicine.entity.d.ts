import { IMedicine } from "../Interfaces/medicine.interface";
import { Illness } from "src/Models/Treatable/Entities/illness.entity";
import { Symptom } from "src/Models/Treatable/Entities/symptom.entity";
export declare class Medicine implements IMedicine {
    id: number;
    name: string;
    description: string;
    manufacturer: string;
    illnesses: Illness[];
    symptoms: Symptom[];
    constructor(name: string, description: string, manufacturer: string);
    addIllness(treatable: Illness): void;
    removeIllness(treatable: Illness): void;
    addSymptom(treatable: Symptom): void;
    removeSymptom(treatable: Symptom): void;
}
