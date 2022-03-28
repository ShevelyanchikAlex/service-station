import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class OrderDao {
    async getAll() {
        return await prisma.order.findMany();
    }

    async getById(id) {
        return await prisma.order.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(order) {
        return await prisma.order.create(
            {
                data: {
                    status: order.status,
                    created_at: order.created_at,
                    completed_at: order.completed_at,
                    cost: +order.cost,
                    car: {
                        connect: {id: +order.car_id},
                    },
                },
                include: {
                    car: true,
                },
            });
    }

    async update(order) {
        return await prisma.order.update({
            where: {
                id: +order.id,
            },
            data: {
                status: order.status,
                created_at: order.created_at,
                completed_at: order.completed_at,
                cost: +order.cost,
                car_id: +order.car_id,
            },
        });
    }

    async deleteById(id) {
        return await prisma.order.delete({
            where: {
                id: +id,
            },
        });
    }
}