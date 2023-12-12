import { REPO_NAMES } from "src/Utils/constants";
import { DataSource } from "typeorm";
import { Review } from "./Entities/review.entity";

export const ReviewProvider = [
  {
    provide: REPO_NAMES.REVIEW,
    useFactory: (dataSource: DataSource) => 
    dataSource.getRepository(Review),
    inject: [REPO_NAMES.DATASOURCE]
  }
]