import { AddressDto } from './address.dto';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsISO8601,
} from 'class-validator';

export class CreateUserDto {
  username: string;
  displayName: string;
}
