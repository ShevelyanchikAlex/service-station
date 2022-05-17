import {Module} from "@nestjs/common";
import {EmployeeDao} from "../dao/employee.dao";
import {EmployeeService} from "../service/employee.service";
import {EmployeeController} from "../controller/employee.controller";


@Module({
    controllers: [EmployeeController],
    providers: [EmployeeService, EmployeeDao],
    exports: [EmployeeService]
})
export class EmployeeModule {
}