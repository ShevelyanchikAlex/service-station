import {CreateJobDto} from "./create.job.dto";
import {IsNumberString} from "class-validator";

export class UpdateJobDto extends CreateJobDto {
    @IsNumberString()
    id: number;
}