export abstract class Treatable implements ITreatable{
    name: string;

    constructor(name: string){
        this.name= name;
    }
}