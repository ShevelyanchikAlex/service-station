import {Module} from '@nestjs/common';
import {CarModule} from "./car.module";
import {EmployeeModule} from "./employee.module";
import {DetailModule} from "./detail.module";
import {JobModule} from "./job.module";
import {ManufactorModule} from "./manufactor.module";
import {OrderModule} from "./order.module";
import {ServiceModule} from "./service.module";

@Module({
    imports: [CarModule, EmployeeModule, DetailModule, JobModule, ManufactorModule, OrderModule, ServiceModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
