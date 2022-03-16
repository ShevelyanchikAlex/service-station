import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class CarDao {
    async getAll() {
        return prisma.car.findMany();
    }
}