import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class EmployeeDao {
    async getAll() {
        return await prisma.employee.findMany();
    }

    async getById(id) {
        return await prisma.employee.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(employee) {
        return await prisma.employee.create(
            {
                data: {
                    name: employee.name,
                    last_name: employee.last_name,
                    email: employee.email,
                    password: employee.password,
                    birth_date: employee.birth_date,
                    speciality: employee.speciality,
                    work_book_id: +employee.work_book_id,
                    start_working_date: employee.start_working_date,
                    salary: +employee.salary,
                    role: employee.role,
                },
            });
    }

    async update(employee) {
        return await prisma.employee.update({
            where: {
                id: +employee.id,
            },
            data: {
                name: employee.name,
                last_name: employee.last_name,
                email: employee.email,
                password: employee.password,
                birth_date: employee.birth_date,
                speciality: employee.speciality,
                work_book_id: +employee.work_book_id,
                start_working_date: employee.start_working_date,
                salary: +employee.salary,
                role: employee.role,
            },
        });
    }

    async deleteById(id) {
        return await prisma.employee.delete({
            where: {
                id: +id,
            },
        });
    }
}