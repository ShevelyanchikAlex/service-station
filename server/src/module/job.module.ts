import {Module} from "@nestjs/common";
import {JobController} from "../controller/job.controller";
import {JobService} from "../service/job.service";
import {JobDao} from "../dao/job.dao";

@Module({
    controllers: [JobController],
    providers: [JobService, JobDao],
})
export class JobModule {
}