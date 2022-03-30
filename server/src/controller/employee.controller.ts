import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {EmployeeService} from "../service/employee.service";
import {CreateEmployeeDto} from "../dto/employee/create.employee.dto";
import {UpdateEmployeeDto} from "../dto/employee/update.employee.dto";

@Controller('/employees')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {
    }

    @Get()
    getAll() {
        return this.employeeService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id) {
        return this.employeeService.getById(id);
    }

    @Post()
    async create(@Body() employee: CreateEmployeeDto) {
        return this.employeeService.create(employee);
    }

    @Put()
    async update(@Body() employee: UpdateEmployeeDto) {
        return this.employeeService.update(employee);
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.employeeService.deleteById(id);
    }
}