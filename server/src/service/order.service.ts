import {Injectable} from "@nestjs/common";
import {OrderDao} from "../dao/order.dao";

@Injectable()
export class OrderService {
    constructor(private orderDao: OrderDao) {
    }

    async getAll() {
        return await this.orderDao.getAll();
    }

    async getById(id) {
        return await this.orderDao.getById(id);
    }

    async create(order) {
        return await this.orderDao.create(order);
    }

    async update(order) {
        return await this.orderDao.update(order);
    }

    async deleteById(id) {
        return await this.orderDao.deleteById(id);
    }
}