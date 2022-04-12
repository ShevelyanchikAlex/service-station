import {Module} from "@nestjs/common";
import {ServiceController} from "../controller/service.controller";
import {ServiceService} from "../service/service.service";
import {ServiceDao} from "../dao/service.dao";

@Module({
    controllers: [ServiceController],
    providers: [ServiceService, ServiceDao],
    exports: [ServiceService],
})
export class ServiceModule {
}