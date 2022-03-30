import {CreateCarDto} from "./create.car.dto";
import {IsNumberString} from "class-validator";

export class UpdateCarDto extends CreateCarDto {
    @IsNumberString()
    id: number;
}