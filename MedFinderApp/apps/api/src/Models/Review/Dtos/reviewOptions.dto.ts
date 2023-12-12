import { IsObject, IsOptional, ValidateNested } from "class-validator";

export class ReviewOptionsDto {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  select?: {
    title?: boolean;
    content?: boolean;
    score?: boolean;
  }

  @IsOptional()
  @IsObject()
  @ValidateNested()
  where?: {
    title?: string;
    content?: string;
    score?: string
  }

  @IsOptional()
  @IsObject()
  @ValidateNested()
  order?: string[];

  @IsOptional()
  @IsObject()
  @ValidateNested()
  realations?: string[] | {
    medicine?: boolean;
    symptoms?: boolean;
  }
}