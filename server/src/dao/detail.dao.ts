import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class DetailDao {
    async getAll() {
        return await prisma.detail.findMany();
    }

    async getById(id) {
        return await prisma.detail.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(detail) {
        return await prisma.detail.create(
            {
                data: {
                    name: detail.name,
                    price: +detail.price,
                    warranty: +detail.warranty,
                    manufacturer: {
                        connect: {id: +detail.manufacturer_id},
                    },
                    service: {
                        connect: {id: +detail.service_id},
                    },
                },
                include: {
                    manufacturer: true,
                    service: true,
                },
            });
    }

    async update(detail) {
        return await prisma.detail.update({
            where: {
                id: +detail.id,
            },
            data: {
                name: detail.name,
                price: +detail.price,
                warranty: +detail.warranty,
                manufacturer: detail.manufacturer,
            },
        });
    }

    async deleteById(id) {
        return await prisma.detail.delete({
            where: {
                id: +id,
            },
        });
    }
}