import {CreateCarDto} from "./CreateCarDto";
import {IsNumberString} from "class-validator";

export class UpdateCarDto extends CreateCarDto {
    @IsNumberString()
    id: number;
}