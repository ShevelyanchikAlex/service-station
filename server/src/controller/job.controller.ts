import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {JobService} from "../service/job.service";
import {CreateJobDto} from "../dto/job/create.job.dto";
import {UpdateJobDto} from "../dto/job/update.job.dto";

@Controller('/jobs')
export class JobController {
    constructor(private jobService: JobService) {
    }

    @Get()
    getAll() {
        return this.jobService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.jobService.getById(id);
    }

    @Post()
    async create(@Body() job: CreateJobDto) {
        return this.jobService.create(job);
    }

    @Put()
    update(@Body() job: UpdateJobDto) {
        return this.jobService.update(job);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.jobService.deleteById(id);
    }
}