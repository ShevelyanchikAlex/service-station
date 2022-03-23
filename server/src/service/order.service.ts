import {Injectable} from "@nestjs/common";
import {OrderDao} from "../dao/order.dao";

@Injectable()
export class OrderService {
    constructor(private orderDao: OrderDao) {
    }

    async getAll() {
        return this.orderDao.getAll();
    }
}