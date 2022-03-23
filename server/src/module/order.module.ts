import {Module} from "@nestjs/common";
import {OrderController} from "../controller/order.controller";
import {OrderService} from "../service/order.service";
import {OrderDao} from "../dao/order.dao";

@Module({
    controllers: [OrderController],
    providers: [OrderService, OrderDao],
})
export class OrderModule {
}