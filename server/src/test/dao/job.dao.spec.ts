import prisma from "../../../lib/prisma";
import {JobDao} from "../../dao/job.dao";
import {EmployeeDao} from "../../dao/employee.dao";

let jobDao: JobDao = new JobDao();
let employeeDao: EmployeeDao = new EmployeeDao();

describe('job dao tests', () => {
    beforeEach(async () => {
        await prisma.job.deleteMany();
        await prisma.employee.deleteMany();
    })

    afterAll(async () => {
        await prisma.job.deleteMany();
        await prisma.employee.deleteMany();
    })

    let employee = {
        name: "Name",
        last_name: 'Lastname',
        email: 'email@gmail.com',
        password: 'fjdsnjfnj312jnjk132',
        birth_date: '2001-04-14T23:39',
        speciality: 'MASTERS',
        work_book_id: '12232321',
        salary: 1000,
        start_working_date: '2022-04-14T23:39',
        role: 'MASTER',
        jobs: [],
        id: undefined,
    };

    it('should create job', async () => {
        let createdEmployee = await employeeDao.create(employee);
        let job = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let createdJob = await jobDao.create(job);
        job.id = createdJob.id;
        job.employee = createdEmployee;
        expect(createdJob).toStrictEqual(job);
    })

    it('should get job by id', async () => {
        let createdEmployee = await employeeDao.create(employee);
        let job = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let createdJob = await jobDao.create(job);
        job.id = createdJob.id;
        job.employee = createdEmployee;
        expect((await jobDao.getById(createdJob.id))).toStrictEqual(job);
    })

    it('should get all cars', async () => {
        let createdEmployee = await employeeDao.create(employee);

        let job1 = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let job2 = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let job3 = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let jobs = [];
        jobs.push(job1);
        jobs.push(job2);
        jobs.push(job3);

        await jobDao.create(job1);
        await jobDao.create(job2);
        await jobDao.create(job3);

        let createdJobs = await jobDao.getAll();
        expect(createdJobs.length).toBe(3);

        for (let i = 0; i < createdJobs.length; i++) {
            jobs[i].id = createdJobs[i].id;
            jobs[i].employee = createdJobs[i].employee;
            expect(createdJobs[i]).toStrictEqual(jobs[i]);
        }
    })

    it('should update job', async () => {
        let createdEmployee = await employeeDao.create(employee);
        let job = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let createdJob = await jobDao.create(job);
        job.id = createdJob.id;
        job.employee = createdJob.employee;
        job.status = 'IN_PROGRESS';
        job.end_date = '2022-07-14T23:39';
            expect((await jobDao.update(job))).toStrictEqual(job);
    })

    it('should delete job by id', async () => {
        let createdEmployee = await employeeDao.create(employee);
        let job = {
            status: 'PENDING',
            start_date: '2022-04-14T23:39',
            end_date: '2022-05-14T23:39',
            services: [],
            employee_id: +createdEmployee.id,
            employee: undefined,
            id: undefined,
        };
        let createdJob = await jobDao.create(job);
        let id = createdJob.id;
        job.id = id;
        job.employee = createdJob.employee;
        await jobDao.deleteById(id);
        expect((await jobDao.getAll()).length).toBe(0);
    })
})

