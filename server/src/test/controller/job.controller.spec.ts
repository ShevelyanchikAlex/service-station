import {JobService} from "../../service/job.service";
import {JobController} from "../../controller/job.controller";

describe('job controller tests', () => {
    let jobService: JobService;
    let jobController: JobController;

    beforeAll(() => {
        jobService = new JobService(null);
        jobController = new JobController(jobService);
    })

    it('should create job', async () => {
        let result = null;
        let job = null;
        jest.spyOn(jobService, 'create').mockImplementation(async () => result);
        expect((await jobController.create(job))).toStrictEqual(result);
        expect(jobService.create).toHaveBeenCalled();
    })

    it('should get job by id', async () => {
        let result = null;
        jest.spyOn(jobService, 'getById').mockImplementation(async () => result);
        expect((await jobController.getById(1))).toStrictEqual(result);
        expect(jobService.getById).toHaveBeenCalled();
    })

    it('should get all jobs', async () => {
        let result = null;
        jest.spyOn(jobService, 'getAll').mockImplementation(async () => result);
        expect(await jobController.getAll()).toStrictEqual(result);
        expect(jobService.getAll).toHaveBeenCalled();
    })

    it('should update job', async () => {
        let result = null;
        let job = null;
        jest.spyOn(jobService, 'update').mockImplementation(async () => result);
        expect(await jobController.update(job)).toStrictEqual(result);
        expect(jobService.update).toHaveBeenCalled();
    })

    it('should delete job by id', async () => {
        let result = null;
        jest.spyOn(jobService, 'deleteById').mockImplementation(async () => result);
        expect((await jobController.deleteById(1))).toStrictEqual(result);
        expect(jobService.deleteById).toHaveBeenCalled();
    })
})