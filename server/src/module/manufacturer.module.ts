import {Module} from "@nestjs/common";
import {ManufacturerController} from "../controller/manufacturer.controller";
import {ManufacturerService} from "../service/manufacturer.service";
import {ManufacturerDao} from "../dao/manufacturer.dao";

@Module({
    controllers: [ManufacturerController],
    providers: [ManufacturerService, ManufacturerDao],
})
export class ManufacturerModule {
}