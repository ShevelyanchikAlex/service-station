import {Controller, Get} from "@nestjs/common";
import {ServiceService} from "../service/service.service";

@Controller('/services')
export class ServiceController {
    constructor(private serviceService: ServiceService) {
    }

    @Get()
    getAll() {
        return this.serviceService.getAll();
    }
}