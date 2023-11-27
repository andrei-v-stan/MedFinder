import { Controller, Get, Param, Query } from "@nestjs/common";
import { MedicineService } from "./medicine.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Medicine } from "./Entities/medicine.entity";
import { MedicineOptionsDto } from "./DTO/medicineOptions.dto";
import { FindManyOptions } from "typeorm";
import { plainToClass } from "class-transformer";

@ApiTags('Medicines')
@Controller('medicines')
export class MedicineController{
    constructor(private readonly medicineService: MedicineService){}

    //test 
    //{"select":{"name":true,"description":true}, "where":{"name":"Aspirin"}}
    /*{
  "select": {
    "name": true,
    "description": true
  },
  "where": {
    "illnesses": {
      "info": {
        "name": "Fever"
      }
    }
  },
  "relations" : {
    "illnesses": true,
  }
  
}*/
    @ApiOperation({ summary: 'Get all medicines from filter' })
    @ApiResponse({ status: 200, description: 'Return all medicines from filter.' })
    @ApiQuery({name:'options', type: 'string', required: false})
    @Get('filter')
    async findByFilter(@Query('options') options?: string): Promise<Medicine[]>{
        let optionsDto: MedicineOptionsDto;

        try {
            optionsDto = options ? JSON.parse(options) : new MedicineOptionsDto();
        } catch (error) {
            console.error("Error parsing options:", error);
            optionsDto = new MedicineOptionsDto();
        }
        const findOptions = this.medicineService.resolveMedicineOptionDto(optionsDto);
        return this.medicineService.find(findOptions);
    }

    @ApiOperation({ summary: 'Get all medicines' })
    @ApiResponse({ status: 200, description: 'Return all medicines.' })
    @Get()
    async findAll(): Promise<Medicine[]>{
        return this.medicineService.find();
    }
    @Get(':id')
    async findOne(@Param('id') id : string){
        return this.medicineService.findOne(+id);
    }
   
}