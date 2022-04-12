import {IsArray, IsNotEmpty, IsNumberString} from "class-validator";

export class CreateServiceDto {
    @IsNotEmpty()
    name: string;
    @IsNumberString()
    price: number;
    @IsNumberString()
    warranty: number;
    @IsNotEmpty()
    description: string;
    @IsNumberString()
    duration: number;
    @IsArray()
    details: [];
}