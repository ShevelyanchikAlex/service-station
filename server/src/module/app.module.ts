import {Module} from '@nestjs/common';
import {CarModule} from "./car.module";
import {EmployeeModule} from "./employee.module";
import {DetailModule} from "./detail.module";
import {JobModule} from "./job.module";
import {ManufacturerModule} from "./manufacturer.module";
import {OrderModule} from "./order.module";
import {ServiceModule} from "./service.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [CarModule, EmployeeModule, DetailModule, JobModule, ManufacturerModule, OrderModule, ServiceModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
