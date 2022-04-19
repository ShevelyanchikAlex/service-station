import prisma from "../../../lib/prisma";
import {EmployeeDao} from "../../dao/employee.dao";

let employeeDao: EmployeeDao = new EmployeeDao();

describe('employee dao tests', () => {
    beforeEach(async () => {
        await prisma.employee.deleteMany();
    })

    afterAll(async () => {
        await prisma.employee.deleteMany();
    })

    it('should create employee', async () => {
        let employee = {
            name: 'Artsiom',
            last_name: 'Sh',
            email: 'vaokv@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345678,
            salary: 500,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let createdEmployee = await employeeDao.create(employee);
        employee.id = createdEmployee.id;
        expect(createdEmployee).toStrictEqual(employee);
    })

    it('should get employee by id', async () => {
        let employee = {
            name: 'Artsiom',
            last_name: 'Sh',
            email: 'vaokv@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345678,
            salary: 500,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let createdEmployee = await employeeDao.create(employee);
        let id = createdEmployee.id;
        employee.id = id;
        expect((await employeeDao.getById(id))).toStrictEqual(employee)
    })

    it('should get all employees', async () => {
        let employee1 = {
            name: 'Artsiom1',
            last_name: 'Sh1',
            email: 'vaokv1@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345676,
            salary: 500,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let employee2 = {
            name: 'Artsiom2',
            last_name: 'Sh2',
            email: 'vaokv2@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345677,
            salary: 600,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let employee3 = {
            name: 'Artsiom3',
            last_name: 'Sh3',
            email: 'vaokv3@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345679,
            salary: 700,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let employees = [];
        employees.push(employee1);
        employees.push(employee2);
        employees.push(employee3);

        await employeeDao.create(employee1);
        await employeeDao.create(employee2);
        await employeeDao.create(employee3);

        let createdEmployees = await employeeDao.getAll();
        expect(createdEmployees.length).toBe(3);

        for (let i = 0; i < createdEmployees.length; i++) {
            employees[i].id = createdEmployees[i].id;
            expect(createdEmployees[i]).toStrictEqual(employees[i]);
        }
    })

    it('should update employee', async () => {
        let employee = {
            name: 'Artsiom',
            last_name: 'Sh',
            email: 'vaokv@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345678,
            salary: 500,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let createdEmployee = await employeeDao.create(employee);
        employee.id = createdEmployee.id;
        employee.name = 'Sergei';
        employee.last_name = 'Polkin';
        expect((await employeeDao.update(employee))).toStrictEqual(employee);
    })

    it('should delete employee by id', async () => {
        let employee = {
            name: 'Artsiom',
            last_name: 'Sh',
            email: 'vaokv@mail.ru',
            password: 'cdsufny732',
            birth_date: '2022-04-14T23:39',
            speciality: 'Slesar',
            work_book_id: 21345678,
            salary: 500,
            start_working_date: '2022-04-14T23:39',
            role: 'MASTER',
            id: undefined,
        };
        let createdEmployee = await employeeDao.create(employee);
        let id = createdEmployee.id;
        employee.id = id;
        let deletedEmployee = await employeeDao.deleteById(id);
        expect((await employeeDao.getAll()).length).toBe(0);
        expect(deletedEmployee).toStrictEqual(employee);
    })
})

