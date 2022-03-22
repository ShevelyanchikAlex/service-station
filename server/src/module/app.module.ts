import {Module} from '@nestjs/common';
import {CarModule} from "./car.module";
import {EmployeeModule} from "./employee.module";
import {DetailModule} from "./detail.module";

@Module({
    imports: [CarModule, EmployeeModule, DetailModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
