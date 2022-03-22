import {Controller, Get} from "@nestjs/common";
import {EmployeeService} from "../service/employee.service";

@Controller('/employees')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {
    }

    @Get()
    getAll() {
        return this.employeeService.getAll();
    }
}