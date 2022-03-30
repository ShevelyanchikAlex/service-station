import {IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumberString} from "class-validator";

enum Role {
    MASTER = 'MASTER',
    MANAGER = 'MANAGER',
    DIRECTOR = 'DIRECTOR'
}

export class CreateEmployeeDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    last_name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsDateString()
    birth_date: string;
    @IsNotEmpty()
    speciality: string;
    @IsNumberString()
    work_book_id: number;
    @IsNumberString()
    salary: number;
    @IsDateString()
    start_working_date: string;
    @IsEnum(Role)
    role: Role;
}