import { AddressDto } from './address.dto';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsISO8601,
} from 'class-validator';

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  address?: AddressDto;
}
