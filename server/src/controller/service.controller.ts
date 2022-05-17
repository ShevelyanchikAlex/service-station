import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {ServiceService} from "../service/service.service";
import {CreateServiceDto} from "../dto/service/create.service.dto";
import {UpdateServiceDto} from "../dto/service/update.service.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/services')
export class ServiceController {
    constructor(private serviceService: ServiceService) {
    }

    @Get()
    getAll() {
        return this.serviceService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.serviceService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Post()
    async create(@Body() service: CreateServiceDto) {
        return this.serviceService.create(service);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Put()
    update(@Body() service: UpdateServiceDto) {
        return this.serviceService.update(service);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.serviceService.deleteById(id);
    }
}