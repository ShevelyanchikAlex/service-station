import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class ServiceDao {
    async getAll() {
        return await prisma.service.findMany({
            include: {
                details: true,
            },
        });
    }

    async getById(id) {
        return await prisma.service.findUnique({
            where: {
                id: +id,
            },
            include: {
                details: true,
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
                    duration: +service.duration,
                    details: {
                        connect: service.details.map(detailId => ({
                            id: +detailId,
                        })),
                    },
                },
                include: {
                    details: true,
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
                duration: +service.duration,
                details: {
                    set: service.details.map(detailId => ({
                        id: +detailId,
                    })),
                },
            },
            include: {
                details: true,
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