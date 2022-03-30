import {IsDateString, IsEnum, IsNumberString} from "class-validator";

enum JobStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}

export class CreateJobDto {
    @IsEnum(JobStatus)
    status: JobStatus;
    @IsDateString()
    end_date: Date;
    @IsNumberString()
    employee_id: number;
}