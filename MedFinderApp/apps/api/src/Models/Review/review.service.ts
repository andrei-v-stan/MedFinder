import { Inject, Injectable } from "@nestjs/common";
import { REPO_NAMES } from "src/Utils/constants";
import { FindManyOptions, Repository } from "typeorm";
import { Review } from "./Entities/review.entity";
import { ReviewOptionsDto } from "./Dtos/reviewOptions.dto";

@Injectable()
export class ReviewService {
  constructor(
    @Inject(REPO_NAMES.REVIEW)
    private reviewRepo: Repository<Review>,
  ) { }

  async findById(id: number): Promise<Review> {
    return this.reviewRepo.findOneBy({ id });
  }

  async find(options?: FindManyOptions<Review>): Promise<Review[]> {
    return this.reviewRepo.find(options);
  }

  resolveReviewOptionDto(optionsDto: ReviewOptionsDto): FindManyOptions<Review> {
    return {
      where: optionsDto.where || {},
      order: optionsDto.order ? this.parseOrderOptions(optionsDto.order) : {},
      select: optionsDto.select || [],
      relations: optionsDto.relations ? Object.keys(optionsDto.relations) : [],
    };
  }

  parseOrderOptions(order: string[]): { [key: string]: 'ASC' | 'DESC' } {
    if (Array.isArray(order)) {
      return order.reduce((acc, criterion) => {
        const [column, direction] = criterion.split(':');
        acc[column] = direction.toUpperCase() as 'ASC' | 'DESC';
        return acc;
      }, {});
    }
    return order;
  }
}