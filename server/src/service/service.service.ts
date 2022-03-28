import {Injectable} from "@nestjs/common";
import {ServiceDao} from "../dao/service.dao";

@Injectable()
export class ServiceService {
    constructor(private serviceDao: ServiceDao) {
    }

    async getAll() {
        return await this.serviceDao.getAll();
    }

    async getById(id) {
        return await this.serviceDao.getById(id);
    }

    async create(service) {
        return await this.serviceDao.create(service);
    }

    async update(service) {
        return await this.serviceDao.update(service);
    }

    async deleteById(id) {
        return await this.serviceDao.deleteById(id);
    }
}