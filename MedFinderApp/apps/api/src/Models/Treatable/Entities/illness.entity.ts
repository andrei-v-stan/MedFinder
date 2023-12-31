import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityInfo } from "./entityinfo.entity";
import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
import { TABLE_NAMES } from "src/Utils/constants";

@Entity({name: TABLE_NAMES.ILLNESSES})
export class Illness {
    @PrimaryGeneratedColumn()
    id: number;
    @Column(()=>EntityInfo)
    info: EntityInfo
    @ManyToMany(()=> Medicine, medicine => medicine.symptoms, {cascade: true})
    medicines: Medicine[];

    constructor(name: string, description: string){
        this.info= new EntityInfo(name, description)
    }
}