import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/DB/database.module";
import { MedicineService } from "./medicine.service";
import { MedicineProvider } from "./medicine.providers";
import { MedicineController } from "./medicine.controller";


@Module({
    imports: [DatabaseModule],
    providers: [
        ...MedicineProvider,
        MedicineService,
    ],
    controllers: [MedicineController],
})
export class MedicineModule{}
