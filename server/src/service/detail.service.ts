import {Injectable} from "@nestjs/common";
import {DetailDao} from "../dao/detail.dao";

@Injectable()
export class DetailService {
    constructor(private detailDao: DetailDao) {
    }

    async getAll() {
        return await this.detailDao.getAll();
    }

    async getById(id) {
        return await this.detailDao.getById(id);
    }

    async create(detail) {
        return await this.detailDao.create(detail);
    }

    async update(detail) {
        return await this.detailDao.update(detail);
    }

    async deleteById(id) {
        return await this.detailDao.deleteById(id);
    }
}