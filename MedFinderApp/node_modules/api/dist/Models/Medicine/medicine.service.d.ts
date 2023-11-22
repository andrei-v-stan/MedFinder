import { FindManyOptions, Repository } from "typeorm";
import { Medicine } from "./Entities/medicine.entity";
import { MedicineOptionsDto } from "./DTO/medicineOptions.dto";
export declare class MedicineService {
    private medicineRepo;
    constructor(medicineRepo: Repository<Medicine>);
    findOne(id: number): Promise<Medicine>;
    find(options?: FindManyOptions<Medicine>): Promise<Medicine[]>;
    resolveMedicineOptionDto(optionsDto: MedicineOptionsDto): FindManyOptions<Medicine>;
    parseOrderOptions(order: string[]): {
        [key: string]: 'ASC' | 'DESC';
    };
}
