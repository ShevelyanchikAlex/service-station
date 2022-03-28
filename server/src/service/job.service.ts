import {Injectable} from "@nestjs/common";
import {JobDao} from "../dao/job.dao";

@Injectable()
export class JobService {
    constructor(private jobDao: JobDao) {
    }

    async getAll() {
        return await this.jobDao.getAll();
    }

    async getById(id) {
        return await this.jobDao.getById(id);
    }

    async create(job) {
        return await this.jobDao.create(job);
    }

    async update(job) {
        return await this.jobDao.update(job);
    }

    async deleteById(id) {
        return await this.jobDao.deleteById(id);
    }
}