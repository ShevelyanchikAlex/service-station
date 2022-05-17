import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {JobService} from "../service/job.service";
import {CreateJobDto} from "../dto/job/create.job.dto";
import {UpdateJobDto} from "../dto/job/update.job.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../decorator/roles.decorator";
import {Role} from "@prisma/client";

@Controller('/jobs')
export class JobController {
    constructor(private jobService: JobService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.jobService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getById(@Param('id') id) {
        return this.jobService.getById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Post()
    async create(@Body() job: CreateJobDto) {
        return this.jobService.create(job);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    update(@Body() job: UpdateJobDto) {
        return this.jobService.update(job);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.DIRECTOR, Role.MANAGER)
    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.jobService.deleteById(id);
    }
}