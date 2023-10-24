import { IsObject, IsString } from "class-validator";
import { SecondDto } from "./second.dto";
import { ApiProperty } from "@nestjs/swagger";

export class FirstDto {
    @IsString()
    @ApiProperty()
    prop1: string;

    @IsString()
    @ApiProperty()
    prop2: string;

    @ApiProperty()
    @IsObject()
    secondDto: SecondDto;
}