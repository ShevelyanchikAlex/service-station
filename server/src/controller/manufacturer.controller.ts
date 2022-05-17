import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {ManufacturerService} from "../service/manufacturer.service";
import {CreateManufacturerDto} from "../dto/manufacturer/create.manufacturer.dto";
import {UpdateManufacturerDto} from "../dto/manufacturer/update.manufacturer.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/manufactors')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.manufacturerService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getById(@Param('id') id) {
        return this.manufacturerService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Post()
    async create(@Body() manufacturer: CreateManufacturerDto) {
        return this.manufacturerService.create(manufacturer);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Put()
    update(@Body() manufacturer: UpdateManufacturerDto) {
        return this.manufacturerService.update(manufacturer);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.manufacturerService.deleteById(id);
    }
}