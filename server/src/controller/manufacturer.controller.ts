import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ManufacturerService} from "../service/manufacturer.service";
import {CreateManufacturerDto} from "../dto/manufacturer/create.manufacturer.dto";
import {UpdateManufacturerDto} from "../dto/manufacturer/update.manufacturer.dto";

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
    async create(@Body() manufacturer: CreateManufacturerDto) {
        return this.manufacturerService.create(manufacturer);
    }

    @Put()
    update(@Body() manufacturer: UpdateManufacturerDto) {
        return this.manufacturerService.update(manufacturer);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.manufacturerService.deleteById(id);
    }
}