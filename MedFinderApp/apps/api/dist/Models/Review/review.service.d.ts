import { FindManyOptions, Repository } from "typeorm";
import { Review } from "./Entities/review.entity";
export declare class ReviewService {
    private reviewRepo;
    constructor(reviewRepo: Repository<Review>);
    findById(id: number): Promise<Review>;
    find(options?: FindManyOptions<Review>): Promise<Review[]>;
}
