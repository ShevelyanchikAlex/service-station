import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class JobDao {
    async getAll() {
        return await prisma.job.findMany();
    }

    async getById(id) {
        return await prisma.job.findUnique({
            where: {
                id: +id,
            },
        });
    }

    async create(job) {
        return await prisma.job.create(
            {
                data: {
                    status: job.status,
                    start_date: job.start_date,
                    end_date: job.end_date,
                    services: {
                        connect: job.services.map(serviceId => ({
                            id: +serviceId,
                        })),
                    },
                    employee: {
                        connect: {id: +job.employee_id},
                    },
                },
                include: {
                    employee: true,
                    services: true,
                },
            });
    }

    async update(job) {
        return await prisma.job.update({
            where: {
                id: +job.id,
            },
            data: {
                status: job.status,
                start_date: job.start_date,
                end_date: job.end_date,
                services: {
                    connect: job.services.map(serviceId => ({
                        id: +serviceId,
                    })),
                },
                employee: {
                    connect: {id: +job.employee_id},
                },
            },
            include: {
                employee: true,
                services: true,
            },
        });
    }

    async deleteById(id) {
        return await prisma.job.delete({
            where: {
                id: +id,
            },
        });
    }
}