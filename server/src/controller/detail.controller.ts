import {Controller, Get} from "@nestjs/common";
import {DetailService} from "../service/detail.service";

@Controller('/details')
export class DetailController {
    constructor(private detailService: DetailService) {
    }

    @Get()
    getAll() {
        return this.detailService.getAll();
    }
}