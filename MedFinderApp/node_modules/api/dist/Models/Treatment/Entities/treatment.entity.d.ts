import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
import { ITreatment } from "../Interfaces/treatment.interface";
import { UserSymptom } from "src/Models/Treatable/Entities/usersymptom.entity";
import { Profile } from "src/Models/Users/Entities/profile.entity";
import { Illness } from "src/Models/Treatable/Entities/illness.entity";
export declare class Treatment implements ITreatment {
    medicineDosage: number;
    medicines: Medicine[];
    administrationRecommendations: string;
    userSymptoms: UserSymptom[];
    userIllnesses: Illness[];
    userProfile: Profile;
}
