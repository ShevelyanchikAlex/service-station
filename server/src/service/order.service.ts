import {Injectable} from "@nestjs/common";
import {OrderDao} from "../dao/order.dao";
import {ServiceService} from "./service.service";

@Injectable()
export class OrderService {
    constructor(private orderDao: OrderDao, private serviceService: ServiceService) {
    }

    async getAll() {
        return await this.orderDao.getAll();
    }

    async getById(id) {
        return await this.orderDao.getById(id);
    }

    async create(order) {
        order.cost = await this.getOrderCost(order);
        return await this.orderDao.create(order);
    }

    async update(order) {
        order.cost = await this.getOrderCost(order);
        return await this.orderDao.update(order);
    }

    async deleteById(id) {
        return await this.orderDao.deleteById(id);
    }

    async getOrderCost(order) {
        let cost = 0;
        for (let i = 0; i < order.services.length; i++) {
            cost += (await this.serviceService.getById(order.services[i])).price;
        }
        return cost;
    }
}