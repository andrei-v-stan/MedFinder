import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MedicineModule } from './Models/Medicine/medicine.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..','medfinder','dist'),
    }), MedicineModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}