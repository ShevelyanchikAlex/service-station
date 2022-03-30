import {CreateEmployeeDto} from "./create.employee.dto";
import {IsNumberString} from "class-validator";

export class UpdateEmployeeDto extends CreateEmployeeDto {
    @IsNumberString()
    id: number;
}