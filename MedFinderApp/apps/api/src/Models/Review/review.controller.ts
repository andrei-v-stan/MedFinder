import { Get, Param, Query } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { Review } from "./Entities/review.entity";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ReviewOptionsDto } from "./Dtos/reviewOptions.dto";

@ApiTags('Reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Review> {
    return this.reviewService.findById(+id);
  }


  @ApiOperation({ summary: 'Get all reviews' })
  @ApiResponse({ status: 200, description: 'Return all reviews' })
  @Get()
  async findAll(): Promise<Review[]> {
    return this.reviewService.find();
  }

  @ApiOperation({ summary: 'Get all reviews from filter' })
  @ApiResponse({ status: 200, description: 'Return all reviews from filter.' })
  @ApiQuery({ name: 'options', type: 'string', required: false })
  @Get('filter')
  async findByFilter(@Query('options') options?: string): Promise<Review[]> {
    let optionsDto: ReviewOptionsDto;

    try {
      optionsDto = options ? JSON.parse(options) : new ReviewOptionsDto();
    }
    catch (error) {
      console.error("Error parsing options:", error);
      optionsDto = new ReviewOptionsDto();
    }
    const findOptions = this.reviewService.resolveReviewOptionDto(optionsDto);
    return this.reviewService.find(findOptions);
  }
}