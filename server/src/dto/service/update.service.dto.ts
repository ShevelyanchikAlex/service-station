import {CreateServiceDto} from "./create.service.dto";
import {IsNumberString} from "class-validator";

export class UpdateServiceDto extends CreateServiceDto {
    @IsNumberString()
    id: number;
}