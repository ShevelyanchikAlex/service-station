import {Injectable} from "@nestjs/common";
import {CarDao} from "../dao/car.dao";

@Injectable()
export class CarService {
    constructor(private carDao: CarDao) {
    }

    async getAll() {
        return await this.carDao.getAll();
    }

    async getById(id) {
        return await this.carDao.getById(id);
    }

    async create(car) {
        return await this.carDao.create(car);
    }

    async update(car) {
        return await this.carDao.update(car);
    }

    async deleteById(id) {
        return await this.carDao.deleteById(id);
    }
}