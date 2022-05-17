import {Injectable} from '@nestjs/common';
import {EmployeeService} from "../service/employee.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private employeeService: EmployeeService, private jwtService: JwtService) {
    }

    async validateEmployee(email: string, password: string): Promise<any> {
        const employee = await this.employeeService.getByEmail(email);
        if (employee && employee.password === password) {
            const {password, ...result} = employee;
            return result;
        }
        return null;
    }

    async login(employee: any) {
        const payload = {email: employee.email, sub: employee.role};
        return {
            access_token: this.jwtService.sign(payload),
            email: employee.email,
        };
    }
}