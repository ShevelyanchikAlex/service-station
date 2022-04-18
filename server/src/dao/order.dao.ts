import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class OrderDao {
    async getAll() {
        return await prisma.order.findMany({
            include: {
                car: true,
                services: true,
            },
        });
    }

    async getById(id) {
        return await prisma.order.findUnique({
            where: {
                id: +id,
            },
            include: {
                car: true,
                services: true,
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
                    services: {
                        connect: order.services.map(serviceId => ({
                            id: +serviceId,
                        })),
                    },
                },
                include: {
                    car: true,
                    services: true,
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
                car: {
                    connect: {id: +order.car_id},
                },
                services: {
                    set: order.services.map(serviceId => ({
                        id: +serviceId,
                    })),
                },
            },
            include: {
                car: true,
                services: true,
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