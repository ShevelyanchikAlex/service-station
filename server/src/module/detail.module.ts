import {Module} from "@nestjs/common";
import {DetailController} from "../controller/detail.controller";
import {DetailService} from "../service/detail.service";
import {DetailDao} from "../dao/detail.dao";

@Module({
    controllers: [DetailController],
    providers: [DetailService, DetailDao],
})
export class DetailModule {
}