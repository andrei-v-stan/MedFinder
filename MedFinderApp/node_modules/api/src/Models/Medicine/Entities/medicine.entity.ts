import { IMedicine } from "../Interfaces/medicine.interface";
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import { Illness } from "src/Models/Treatable/Entities/illness.entity";
import { Symptom } from "src/Models/Treatable/Entities/symptom.entity";
import { TABLE_NAMES } from "src/Utils/constants";
import { TextReview } from "src/Models/Review/Entities/textReview.entity";

@Entity({name: TABLE_NAMES.MEDICINES})
export class Medicine implements IMedicine{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    manufacturer: string;
    @ManyToMany(()=>Illness, illness => illness.medicines)
    @JoinTable({
        name: TABLE_NAMES.MEDICINE_ILLNESS,
        joinColumn: {name: 'illnessId', referencedColumnName: 'id'},
        inverseJoinColumn : {name: 'medicineId', referencedColumnName: 'id'}
    })
    illnesses: Illness[];
    @ManyToMany(()=>Symptom, symptom => symptom.medicines)
    @JoinTable({
        name: TABLE_NAMES.MEDICINE_SYMPTOM,
        joinColumn: {name: 'symptomId', referencedColumnName: 'id'},
        inverseJoinColumn : {name: 'medicineId', referencedColumnName: 'id'}
    })
    symptoms: Symptom[];

   // @OneToMany(()=> TextReview, review=> review.medicine)
    //reviews: TextReview[]

    constructor(name: string, description: string, manufacturer: string){
        this.name= name;
        this.description= description;
        this.manufacturer= manufacturer;
    }
    
    
    addIllness(treatable: Illness){
        this.illnesses.push(treatable);
    }
    removeIllness(treatable: Illness){
        var index = this.illnesses.indexOf(treatable);
        if(index != -1)
            this.illnesses.splice(index, 1);
    }

    addSymptom(treatable: Symptom){
        this.symptoms.push(treatable);
    }
    removeSymptom(treatable: Symptom){
        var index = this.symptoms.indexOf(treatable);
        if(index != -1)
            this.symptoms.splice(index, 1);
    }

}