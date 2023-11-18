import { Column } from "typeorm";

export class EntityInfo implements IInfo{
    @Column()
    name: string;
    @Column()
    description: string;
   
    constructor(name: string, description: string){
        this.name= name;
        this.description= description;
    }
}