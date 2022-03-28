import {Injectable} from "@nestjs/common";
import {EmployeeDao} from "../dao/employee.dao";

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
        return await this.employeeDao.create(employee);
    }

    async update(employee) {
        return await this.employeeDao.update(employee);
    }

    async deleteById(id) {
        return await this.employeeDao.deleteById(id);
    }
}