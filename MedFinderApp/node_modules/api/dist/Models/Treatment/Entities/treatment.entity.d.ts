import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
import { ITreatment } from "../Interfaces/treatment.interface";
import { UserSymptom } from "src/Models/Treatable/Entities/usersymptom.entity";
import { UserProfile } from "src/Models/Users/Entities/user-data.entity";
import { Illness } from "src/Models/Treatable/Entities/illness.entity";
export declare class Treatment implements ITreatment {
    medicineDosage: number;
    medicines: Medicine[];
    administrationRecommendations: string;
    userSymptoms: UserSymptom[];
    userIllnesses: Illness[];
    userProfile: UserProfile;
}
