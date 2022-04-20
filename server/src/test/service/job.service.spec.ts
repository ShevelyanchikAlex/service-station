import {JobDao} from "../../dao/job.dao";
import {JobService} from "../../service/job.service";

describe('job service tests', () => {
    let jobDao: JobDao;
    let jobService: JobService;

    beforeAll(() => {
        jobDao = new JobDao();
        jobService = new JobService(jobDao);
    })

    it('should create job', async () => {
        let result = null;
        let job = null;
        jest.spyOn(jobDao, 'create').mockImplementation(async () => result);
        expect((await jobService.create(job))).toStrictEqual(result);
        expect(jobDao.create).toHaveBeenCalled();
    })

    it('should get job by id', async () => {
        let result = null;
        jest.spyOn(jobDao, 'getById').mockImplementation(async () => result);
        expect((await jobService.getById(1))).toStrictEqual(result);
        expect(jobDao.getById).toHaveBeenCalled();
    })

    it('should get all jobs', async () => {
        let result = null;
        jest.spyOn(jobDao, 'getAll').mockImplementation(async () => result);
        expect(await jobService.getAll()).toStrictEqual(result);
        expect(jobDao.getAll).toHaveBeenCalled();
    })

    it('should update job', async () => {
        let result = null;
        let job = null;
        jest.spyOn(jobDao, 'update').mockImplementation(async () => result);
        expect(await jobService.update(job)).toStrictEqual(result);
        expect(jobDao.update).toHaveBeenCalled();
    })

    it('should delete job by id', async () => {
        let result = null;
        jest.spyOn(jobDao, 'deleteById').mockImplementation(async () => result);
        expect((await jobService.deleteById(1))).toStrictEqual(result);
        expect(jobDao.deleteById).toHaveBeenCalled();
    })
})