import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class OrderDao {
    async getAll() {
        return prisma.order.findMany();
    }
}