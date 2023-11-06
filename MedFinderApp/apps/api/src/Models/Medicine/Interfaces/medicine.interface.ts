import { Treatable } from "src/Models/Treatable/Entities/treatable.entity";

export interface IMedicine{
    name: string,
    description: string,
    manufacturer: string,
    treatables: Treatable[],

}