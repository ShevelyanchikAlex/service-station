import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class CarDao {
    async getAll() {
        return await prisma.car.findMany();
    }

    async getById(id) {
        return await prisma.car.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(car) {
        return await prisma.car.create(
            {
                data: {
                    car_number: car.car_number,
                    brand: car.brand,
                    model: car.model,
                },
            });
    }

    async update(car) {
        return await prisma.car.update({
            where: {
                id: +car.id,
            },
            data: {
                car_number: car.car_number,
                brand: car.brand,
                model: car.model,
            },
        });
    }

    async deleteById(id) {
        return await prisma.car.delete({
            where: {
                id: +id,
            },
        });
    }
}