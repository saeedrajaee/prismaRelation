import { IsEmail, IsOptional, IsString } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  username?: string;
  @IsString()
  @IsOptional()
  displayName?: string;
}
