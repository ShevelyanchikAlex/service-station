import {Controller, Get} from "@nestjs/common";
import {CarService} from "../service/car.service";

@Controller('/cars')
export class CarController {
    constructor(private carService: CarService) {
    }

    @Get()
    getAll() {
        return this.carService.getAll();
    }
}