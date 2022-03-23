import {Module} from "@nestjs/common";
import {ManufactorController} from "../controller/manufactor.controller";
import {ManufactorService} from "../service/manufactor.service";
import {ManufactorDao} from "../dao/manufactor.dao";

@Module({
    controllers: [ManufactorController],
    providers: [ManufactorService, ManufactorDao],
})
export class ManufactorModule {
}