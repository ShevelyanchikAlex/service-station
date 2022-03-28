import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {DetailService} from "../service/detail.service";

@Controller('/details')
export class DetailController {
    constructor(private detailService: DetailService) {
    }

    @Get()
    getAll() {
        return this.detailService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id) {
        return this.detailService.getById(id);
    }

    @Post()
    async create(@Body() detail) {
        return this.detailService.create(detail);
    }

    @Put()
    async update(@Body() detail) {
        return this.detailService.update(detail);
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.detailService.deleteById(id);
    }
}