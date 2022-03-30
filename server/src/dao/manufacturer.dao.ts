import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class ManufacturerDao {
    async getAll() {
        return await prisma.manufacturer.findMany();
    }

    async getById(id) {
        return prisma.manufacturer.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(manufacturer) {
        return await prisma.manufacturer.create(
            {
                data: {
                    name: manufacturer.name,
                },
            });
    }

    async update(manufacturer) {
        return await prisma.manufacturer.update({
            where: {
                id: +manufacturer.id,
            },
            data: {
                name: manufacturer.name,
            },
        });
    }

    async deleteById(id) {
        return await prisma.manufacturer.delete({
            where: {
                id: +id,
            },
        });
    }

}