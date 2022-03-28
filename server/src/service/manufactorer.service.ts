import {Injectable} from "@nestjs/common";
import {ManufactorerDao} from "../dao/manufactorer.dao";

@Injectable()
export class ManufactorerService {
    constructor(private manufactorerDao: ManufactorerDao) {
    }

    async getAll() {
        return await this.manufactorerDao.getAll();
    }

    async getById(id) {
        return await this.manufactorerDao.getById(id);
    }

    async create(manufactorer) {
        return await this.manufactorerDao.create(manufactorer);
    }

    async update(manufactorer) {
        return await this.manufactorerDao.update(manufactorer);
    }

    async deleteById(id) {
        return await this.manufactorerDao.deleteById(id);
    }
}