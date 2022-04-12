import {Module} from "@nestjs/common";
import {OrderController} from "../controller/order.controller";
import {OrderService} from "../service/order.service";
import {OrderDao} from "../dao/order.dao";
import {ServiceService} from "../service/service.service";
import {ServiceModule} from "./service.module";

@Module({
    controllers: [OrderController],
    providers: [OrderService, OrderDao],
    imports: [ServiceModule],
})
export class OrderModule {
}