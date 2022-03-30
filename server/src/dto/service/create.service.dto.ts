import {IsDateString, IsNotEmpty, IsNumberString} from "class-validator";

export class CreateServiceDto {
    @IsNotEmpty()
    name: string;
    @IsNumberString()
    price: number;
    @IsNumberString()
    warranty: number;
    @IsNotEmpty()
    description: string;
    @IsDateString()
    end_date: string;
    @IsNumberString()
    job_id: number;
    @IsNumberString()
    order_id: number;
}