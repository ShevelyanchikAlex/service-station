import {IsArray, IsDateString, IsEnum, IsNumberString} from "class-validator";

enum JobStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED
}

export class CreateJobDto {
    @IsEnum(JobStatus)
    status: JobStatus;
    @IsDateString()
    start_date: string;
    @IsDateString()
    end_date: string;
    @IsNumberString()
    employee_id: number;
    @IsArray()
    services: [];
}