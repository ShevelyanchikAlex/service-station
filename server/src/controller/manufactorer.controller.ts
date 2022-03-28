import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ManufactorerService} from "../service/manufactorer.service";

@Controller('/manufactors')
export class ManufactorerController {
    constructor(private manufactorerService: ManufactorerService) {
    }

    @Get()
    getAll() {
        return this.manufactorerService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.manufactorerService.getById(id);
    }

    @Post()
    async create(@Body() manufactorer) {
        return this.manufactorerService.create(manufactorer);
    }

    @Put()
    update(@Body() manufactorer) {
        return this.manufactorerService.update(manufactorer);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.manufactorerService.deleteById(id);
    }
}