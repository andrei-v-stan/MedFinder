import { Treatable } from "./treatable.entity";

export class Symptom extends Treatable{
    type: string;
    duration: number;
    intensity: number;

    constructor(name: string, type: string, duration: number, intensity: number){
        super(name);
        this.type= type;
        this.duration= duration;
        this.intensity= intensity;
    }


}