import {IsNotEmpty, IsNumberString, Min} from "class-validator";

export class CreateDetailDto {
    @IsNotEmpty()
    name: string;
    @IsNumberString()
    price: number;
    @IsNumberString()
    warranty: number
    @IsNumberString()
    manufacturer_id: number;
    @IsNumberString()
    service_id: number;
}