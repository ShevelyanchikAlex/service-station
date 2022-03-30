import {CreateDetailDto} from "./create.detail.dto";
import {IsNumberString} from "class-validator";

export class UpdateDetailDto extends CreateDetailDto {
    @IsNumberString()
    id: number;
}