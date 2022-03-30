import {IsNotEmpty, Matches} from "class-validator";

export class CreateCarDto {
    @Matches('^[0-9]{4} [A-Z]{2}-[0-7]{1}$')
    car_number: string;
    @IsNotEmpty()
    brand: string;
    @IsNotEmpty()
    model: string;
}