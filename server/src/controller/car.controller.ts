import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {CarService} from "../service/car.service";
import {CreateCarDto} from "../dto/CreateCarDto";
import {UpdateCarDto} from "../dto/UpdateCarDto";

@Controller('/cars')
export class CarController {
    constructor(private carService: CarService) {
    }

    @Get()
    async getAll() {
        return this.carService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id) {
        return this.carService.getById(id);
    }

    @Post()
    async create(@Body() car: CreateCarDto) {
        return this.carService.create(car);
    }

    @Put()
    async update(@Body() car: UpdateCarDto) {
        return this.carService.update(car);
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.carService.deleteById(id);
    }
}