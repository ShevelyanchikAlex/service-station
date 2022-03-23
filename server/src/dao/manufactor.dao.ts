import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class ManufactorDao {
    async getAll() {
        return prisma.manufacturer.findMany();
    }
}