import {Controller, Get} from "@nestjs/common";
import {ManufactorService} from "../service/manufactor.service";

@Controller('/manufactors')
export class ManufactorController {
    constructor(private manufactorService: ManufactorService) {
    }

    @Get()
    getAll() {
        return this.manufactorService.getAll();
    }
}