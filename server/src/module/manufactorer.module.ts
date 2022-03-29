import {Module} from "@nestjs/common";
import {ManufactorerController} from "../controller/manufactorer.controller";
import {ManufactorerService} from "../service/manufactorer.service";
import {ManufactorerDao} from "../dao/manufactorer.dao";

@Module({
    controllers: [ManufactorerController],
    providers: [ManufactorerService, ManufactorerDao],
})
export class ManufactorerModule {
}