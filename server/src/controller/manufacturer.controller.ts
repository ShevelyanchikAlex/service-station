import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ManufacturerService} from "../service/manufacturer.service";

@Controller('/manufactors')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {
    }

    @Get()
    getAll() {
        return this.manufacturerService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.manufacturerService.getById(id);
    }

    @Post()
    async create(@Body() manufacturer) {
        return this.manufacturerService.create(manufacturer);
    }

    @Put()
    update(@Body() manufacturer) {
        return this.manufacturerService.update(manufacturer);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.manufacturerService.deleteById(id);
    }
}