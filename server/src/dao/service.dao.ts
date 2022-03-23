import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class ServiceDao {
    async getAll() {
        return prisma.service.findMany();
    }
}