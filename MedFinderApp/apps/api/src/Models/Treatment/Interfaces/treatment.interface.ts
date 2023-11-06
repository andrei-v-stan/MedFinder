import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
import { Treatable } from "src/Models/Treatable/Entities/treatable.entity";

export interface ITreatment{
    medicineDosage: number,
    medicines: Medicine[],
    treatables: Treatable[],
    administrationRecommendations: string
}