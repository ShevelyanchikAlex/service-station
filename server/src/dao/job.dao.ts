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
                    end_date: job.end_date,
                    employee: {
                        connect: {id: +job.employee_id},
                    },
                },
                include: {
                    employee: true,
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
                end_date: job.end_date,
                employee_id: +job.employee_id,
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