import {BadRequestException, Injectable} from "@nestjs/common";
import {EmployeeDao} from "../dao/employee.dao";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

@Injectable()
export class EmployeeService {
    constructor(private employeeDao: EmployeeDao) {
    }

    async getAll() {
        return await this.employeeDao.getAll();
    }

    async getById(id) {
        return await this.employeeDao.getById(id);
    }

    async create(employee) {
        try {
            return await this.employeeDao.create(employee);
        } catch (e) {
            let message = [];
            if (e instanceof PrismaClientKnownRequestError) {
                message.push('email must be unique');
                throw new BadRequestException(message);
            }
        }
    }

    async update(employee) {
        try {
            return await this.employeeDao.update(employee);
        } catch (e) {
            let message = [];
            if (e instanceof PrismaClientKnownRequestError) {
                message.push('email must be unique');
                throw new BadRequestException(message);
            }
        }
    }

    async deleteById(id) {
        return await this.employeeDao.deleteById(id);
    }
}