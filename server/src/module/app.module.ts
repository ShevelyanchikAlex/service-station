import {Module} from '@nestjs/common';
import {CarModule} from "./car.module";
import {EmployeeModule} from "./employee.module";
import {DetailModule} from "./detail.module";
import {JobModule} from "./job.module";
import {ManufactorerModule} from "./manufactorer.module";
import {OrderModule} from "./order.module";
import {ServiceModule} from "./service.module";

@Module({
    imports: [CarModule, EmployeeModule, DetailModule, JobModule, ManufactorerModule, OrderModule, ServiceModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
