import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/DB/database.module";
import { ReviewProvider } from "./review.provider";
import { ReviewService } from "./review.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    ...ReviewProvider,
    ReviewService
  ]
})
export class ReviewModule{}