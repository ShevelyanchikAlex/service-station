import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {OrderService} from "../service/order.service";
import {CreateOrderDto} from "../dto/order/create.order.dto";
import {UpdateOrderDto} from "../dto/order/update.order.dto";

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
    async create(@Body() order: CreateOrderDto) {
        return this.orderService.create(order);
    }

    @Put()
    update(@Body() order: UpdateOrderDto) {
        return this.orderService.update(order);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.orderService.deleteById(id);
    }
}