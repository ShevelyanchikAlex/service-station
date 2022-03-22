import {Injectable} from "@nestjs/common";
import {EmployeeDao} from "../dao/employee.dao";

@Injectable()
export class EmployeeService {
    constructor(private employeeDao: EmployeeDao) {
    }

    async getAll() {
        return this.employeeDao.getAll();
    }
}