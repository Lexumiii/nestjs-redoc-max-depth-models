import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ThirdDto {
    @IsString()
    @ApiProperty()
    prop1: string;

    @IsString()
    @ApiProperty()
    prop2: string;
}