import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
export interface ITreatment {
    medicineDosage: number;
    medicines: Medicine[];
    administrationRecommendations: string;
}
