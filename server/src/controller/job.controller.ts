import {Controller, Get} from "@nestjs/common";
import {JobService} from "../service/job.service";

@Controller('/jobs')
export class JobController {
    constructor(private jobService: JobService) {
    }

    @Get()
    getAll() {
        return this.jobService.getAll();
    }
}