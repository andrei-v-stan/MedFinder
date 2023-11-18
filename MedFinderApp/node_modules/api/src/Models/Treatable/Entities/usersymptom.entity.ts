import { TABLE_NAMES } from "src/Utils/constants";
import { Column, ManyToMany, PrimaryGeneratedColumn, Entity, OneToOne } from "typeorm";
import { EntityInfo } from "./entityinfo.entity";
import { Symptom } from "./symptom.entity";

@Entity({name: TABLE_NAMES.USER_SYMPTOMS})
export class UserSymptom {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    duration: number;
    @Column()
    intensity: number;
    @Column(()=>EntityInfo)
    info: EntityInfo
    @OneToOne(() => Symptom, symptom=> symptom.id)
    baseSymptom: Symptom
    
    constructor(name: string, description: string, duration: number, intensity: number){
        this.info= new EntityInfo(name, description);
        this.intensity= intensity;
        this.duration= duration;
    }
}