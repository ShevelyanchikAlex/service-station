import {BadRequestException, HttpException, Injectable} from "@nestjs/common";
import {CarDao} from "../dao/car.dao";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

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
        try {
            return await this.carDao.create(car);
        } catch (e) {
            let message = [];
            if (e instanceof PrismaClientKnownRequestError) {
                message.push('car_number must be unique');
                throw new BadRequestException(message);
            }
        }
    }

    async update(car) {
        try {
            return await this.carDao.update(car);
        } catch (e) {
            let message = [];
            if (e instanceof PrismaClientKnownRequestError) {
                message.push('car_number must be unique');
                throw new BadRequestException(message);
            }
        }
    }

    async deleteById(id) {
        return await this.carDao.deleteById(id);
    }
}