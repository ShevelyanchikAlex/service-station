import {Controller, Get} from "@nestjs/common";
import {OrderService} from "../service/order.service";

@Controller('/orders')
export class OrderController {
    constructor(private orderService: OrderService) {
    }

    @Get()
    getAll() {
        return this.orderService.getAll();
    }
}