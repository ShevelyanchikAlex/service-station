import {Injectable} from "@nestjs/common";
import prisma from "../../lib/prisma";

@Injectable()
export class EmployeeDao {
    async getAll() {
        return prisma.employee.findMany();
    }
}