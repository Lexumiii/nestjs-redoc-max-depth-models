import { IsObject, IsString } from 'class-validator';
import { ThirdDto } from './third.dto';
import { ApiProperty } from '@nestjs/swagger';

export class SecondDto {
  @IsString()
  @ApiProperty()
  prop1: string;

  @IsString()
  @ApiProperty()
  prop2: string;

  @IsObject()
  @ApiProperty()
  thirdDto: ThirdDto;
}
