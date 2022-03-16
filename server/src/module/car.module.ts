import {Module} from "@nestjs/common";
import {CarService} from "../service/car.service";
import {CarDao} from "../dao/car.dao";
import {CarController} from "../controller/car.controller";

@Module({
    controllers: [CarController],
    providers: [CarService, CarDao],
})
export class CarModule {
}