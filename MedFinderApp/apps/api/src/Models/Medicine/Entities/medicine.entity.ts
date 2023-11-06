import { Treatable } from "src/Models/Treatable/Entities/treatable.entity";
import { IMedicine } from "../Interfaces/medicine.interface";

export class Medicine implements IMedicine{
    name: string;
    description: string;
    manufacturer: string;
    treatables: Treatable[] = [];

    constructor(name: string, description: string, manufacturer: string){
        this.name= name;
        this.description= description;
        this.manufacturer= manufacturer;
    }
    
    addTreatable(treatable: Treatable){
        this.treatables.push(treatable);
    }
    removeTreatable(treatable: Treatable){
        var index = this.treatables.indexOf(treatable);
        if(index != -1)
            this.treatables.splice(index, 1);
    }

}