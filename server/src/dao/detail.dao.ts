import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class DetailDao {
    async getAll() {
        return prisma.detail.findMany();
    }
}