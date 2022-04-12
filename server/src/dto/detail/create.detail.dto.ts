import {IsNotEmpty, IsNumberString} from "class-validator";

export class CreateDetailDto {
    @IsNotEmpty()
    name: string;
    @IsNumberString()
    price: number;
    @IsNumberString()
    warranty: number
    @IsNumberString()
    manufacturer_id: number;
}