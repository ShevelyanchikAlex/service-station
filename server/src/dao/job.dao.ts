import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class JobDao {
    async getAll() {
        return prisma.job.findMany();
    }
}