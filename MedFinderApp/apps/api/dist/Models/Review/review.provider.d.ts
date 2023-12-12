import { DataSource } from "typeorm";
import { Review } from "./Entities/review.entity";
export declare const ReviewProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Review>;
    inject: string[];
}[];
