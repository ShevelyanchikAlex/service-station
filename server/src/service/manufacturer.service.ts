import {Injectable} from "@nestjs/common";
import {ManufacturerDao} from "../dao/manufacturer.dao";

@Injectable()
export class ManufacturerService {
    constructor(private manufacturerDao: ManufacturerDao) {
    }

    async getAll() {
        return await this.manufacturerDao.getAll();
    }

    async getById(id) {
        return await this.manufacturerDao.getById(id);
    }

    async create(manufacturer) {
        return await this.manufacturerDao.create(manufacturer);
    }

    async update(manufacturer) {
        return await this.manufacturerDao.update(manufacturer);
    }

    async deleteById(id) {
        return await this.manufacturerDao.deleteById(id);
    }
}