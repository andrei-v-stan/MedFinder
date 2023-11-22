import { Transform } from "class-transformer";
import { IsArray, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";

export class MedicineOptionsDto {
    @IsOptional()
    @IsObject()
    @ValidateNested()
    select?: { name?: boolean; description?: boolean; manufacturer?: boolean };

    @IsOptional()
    @IsObject()
    @ValidateNested()
    where?: { name?: string; description?: string; manufacturer?: string };

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    order?: string[];
    
    constructor() {
      this.select = {};
      this.where = {};
      this.order = [];
  }
}