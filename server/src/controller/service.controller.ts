import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ServiceService} from "../service/service.service";
import {CreateServiceDto} from "../dto/service/create.service.dto";
import {UpdateServiceDto} from "../dto/service/update.service.dto";

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
    async create(@Body() service: CreateServiceDto) {
        return this.serviceService.create(service);
    }

    @Put()
    update(@Body() service: UpdateServiceDto) {
        return this.serviceService.update(service);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.serviceService.deleteById(id);
    }
}