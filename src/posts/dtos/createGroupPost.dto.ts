import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsISO8601,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateGroupPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  discription: string;
  @IsNotEmpty({ each: true })
  @IsNumber({}, { each: true })
  @IsArray()
  @ArrayNotEmpty()
  userId: number[];
}
