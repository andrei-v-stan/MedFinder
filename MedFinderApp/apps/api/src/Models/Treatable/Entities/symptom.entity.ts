import { Column, ManyToMany, PrimaryGeneratedColumn, JoinTable, Entity } from "typeorm";
import { EntityInfo } from "./entityinfo.entity";
import { Medicine } from "src/Models/Medicine/Entities/medicine.entity";
import { TABLE_NAMES } from "src/Utils/constants";

@Entity({name: TABLE_NAMES.SYMPTOMS})
export class Symptom {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column(()=>EntityInfo)
    info: EntityInfo
    @ManyToMany(() => Medicine, medicine => medicine.symptoms,  {cascade: true})
    medicines: Medicine[];

    constructor(name: string, description: string, type: string){
        this.info= new EntityInfo(name, description)
        this.type= type;
    }


}