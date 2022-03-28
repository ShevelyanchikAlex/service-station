import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {OrderService} from "../service/order.service";

@Controller('/orders')
export class OrderController {
    constructor(private orderService: OrderService) {
    }

    @Get()
    getAll() {
        return this.orderService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.orderService.getById(id);
    }

    @Post()
    async create(@Body() order) {
        return this.orderService.create(order);
    }

    @Put()
    update(@Body() order) {
        return this.orderService.update(order);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.orderService.deleteById(id);
    }
}