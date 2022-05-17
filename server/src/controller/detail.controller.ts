import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {DetailService} from "../service/detail.service";
import {CreateDetailDto} from "../dto/detail/create.detail.dto";
import {UpdateDetailDto} from "../dto/detail/update.detail.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/details')
export class DetailController {
    constructor(private detailService: DetailService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.detailService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id) {
        return this.detailService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Post()
    async create(@Body() detail: CreateDetailDto) {
        return this.detailService.create(detail);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Put()
    async update(@Body() detail: UpdateDetailDto) {
        return this.detailService.update(detail);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Delete(':id')
    async deleteById(@Param('id') id) {
        return this.detailService.deleteById(id);
    }
}