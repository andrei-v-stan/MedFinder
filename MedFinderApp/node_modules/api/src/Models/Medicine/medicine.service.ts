import { Inject, Injectable } from "@nestjs/common";
import { FindManyOptions, Repository } from "typeorm";
import { Medicine } from "./Entities/medicine.entity";
import { REPO_NAMES } from "src/Utils/constants";
import { MedicineOptionsDto } from "./DTO/medicineOptions.dto";


@Injectable()
export class MedicineService {
    
    constructor(
        @Inject(REPO_NAMES.MEDICINE)
        private medicineRepo: Repository<Medicine>,
    ){}
    async findOne(id: number): Promise<Medicine> {
        return this.medicineRepo.findOneBy({id});
    }
    async find(options?: FindManyOptions<Medicine>) : Promise<Medicine[]>{
        return this.medicineRepo.find(options);
    }
    resolveMedicineOptionDto(optionsDto: MedicineOptionsDto): FindManyOptions<Medicine>{
        return {
            where: optionsDto.where || {},
            order: optionsDto.order ? this.parseOrderOptions(optionsDto.order) : {},
            select: optionsDto.select || [],
            relations: optionsDto.relations ? Object.keys(optionsDto.relations) : [],
          };
    }
    parseOrderOptions(order: string[]): { [key: string]: 'ASC' | 'DESC' } {
        if (Array.isArray(order)){
        return order.reduce((acc, criterion) => {
          const [column, direction] = criterion.split(':');
          acc[column] = direction.toUpperCase() as 'ASC' | 'DESC';
          return acc;
        }, {});
        } 
        return order;
        
    }
    
}