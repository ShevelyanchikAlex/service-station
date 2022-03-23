import {Injectable} from "@nestjs/common";
import {JobDao} from "../dao/job.dao";

@Injectable()
export class JobService {
    constructor(private jobDao: JobDao) {
    }

    async getAll() {
        return this.jobDao.getAll();
    }
}