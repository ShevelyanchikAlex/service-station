import {Injectable} from "@nestjs/common";
import {ServiceDao} from "../dao/service.dao";

@Injectable()
export class ServiceService {
    constructor(private serviceDao: ServiceDao) {
    }

    async getAll() {
        return this.serviceDao.getAll();
    }
}