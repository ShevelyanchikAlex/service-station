import {CreateManufacturerDto} from "./create.manufacturer.dto";
import {IsNumberString} from "class-validator";

export class UpdateManufacturerDto extends CreateManufacturerDto {
    @IsNumberString()
    id: number;
}