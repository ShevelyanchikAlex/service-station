import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {CarService} from "../service/car.service";
import {CreateCarDto} from "../dto/car/create.car.dto";
import {UpdateCarDto} from "../dto/car/update.car.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/cars')
export class CarController {
    constructor(private carService: CarService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() {
        return this.carService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id) {
        return this.carService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Post()
    async create(@Body() car: CreateCarDto) {
        return this.carService.create(car);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Put()
    async update(@Body() car: UpdateCarDto) {
        return this.carService.update(car);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.carService.deleteById(id);
    }
}