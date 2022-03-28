import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ServiceService} from "../service/service.service";

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

    @Post()
    async create(@Body() service) {
        return this.serviceService.create(service);
    }

    @Put()
    update(@Body() service) {
        return this.serviceService.update(service);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.serviceService.deleteById(id);
    }
}