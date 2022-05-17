import {Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards} from "@nestjs/common";
import {EmployeeService} from "../service/employee.service";
import {CreateEmployeeDto} from "../dto/employee/create.employee.dto";
import {UpdateEmployeeDto} from "../dto/employee/update.employee.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/employees')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.employeeService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id) {
        return this.employeeService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR)
    @Post()
    async create(@Body() employee: CreateEmployeeDto) {
        return this.employeeService.create(employee);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR)
    @Put()
    async update(@Body() employee: UpdateEmployeeDto) {
        return this.employeeService.update(employee);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR)
    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.employeeService.deleteById(id);
    }
}