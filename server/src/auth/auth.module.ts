import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local.strategy';
import {AuthController} from "./auth.controller";
import {EmployeeModule} from "../module/employee.module";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        PassportModule,
        EmployeeModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '43200s'},
        }),],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {
}
