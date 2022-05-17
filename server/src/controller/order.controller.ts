import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {OrderService} from "../service/order.service";
import {CreateOrderDto} from "../dto/order/create.order.dto";
import {UpdateOrderDto} from "../dto/order/update.order.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/orders')
export class OrderController {
    constructor(private orderService: OrderService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.orderService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getById(@Param('id') id) {
        return this.orderService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Post()
    async create(@Body() order: CreateOrderDto) {
        return this.orderService.create(order);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Put()
    update(@Body() order: UpdateOrderDto) {
        return this.orderService.update(order);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.orderService.deleteById(id);
    }
}