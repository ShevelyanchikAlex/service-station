import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class ServiceDao {
    async getAll() {
        return await prisma.service.findMany();
    }

    async getById(id) {
        return await prisma.service.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(service) {
        return await prisma.service.create(
            {
                data: {
                    name: service.name,
                    price: +service.price,
                    warranty: +service.warranty,
                    description: service.description,
                    end_date: service.end_date,
                    job: {
                        connect: {id: +service.job_id},
                    },
                    order: {
                        connect: {id: +service.order_id},
                    },
                },
                include: {
                    job: true,
                    order: true,
                },
            });
    }

    async update(service) {
        return await prisma.service.update({
            where: {
                id: +service.id,
            },
            data: {
                name: service.name,
                price: +service.price,
                warranty: +service.warranty,
                description: service.description,
                end_date: service.end_date,
                job_id: +service.job_id,
                order_id: +service.order_id,
            },
        });
    }

    async deleteById(id) {
        return await prisma.service.delete({
            where: {
                id: +id,
            },
        });
    }
}