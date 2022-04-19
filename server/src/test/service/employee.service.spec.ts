import {EmployeeDao} from "../../dao/employee.dao";
import {EmployeeService} from "../../service/employee.service";

describe('employee service tests', () => {
    let employeeDao: EmployeeDao;
    let employeeService: EmployeeService;

    beforeAll(() => {
        employeeDao = new EmployeeDao()
        employeeService = new EmployeeService(employeeDao);
    })

    it('should create employee', async () => {
        let result = null;
        let employee = null;
        jest.spyOn(employeeDao, 'create').mockImplementation(async () => result)
        expect((await employeeService.create(employee))).toStrictEqual(result);
        expect(employeeDao.create).toHaveBeenCalled();
    })

    it('should get employee by id', async () => {
        let result = null;
        jest.spyOn(employeeDao, 'getById').mockImplementation(async () => result)
        expect((await employeeService.getById(1))).toStrictEqual(result);
        expect(employeeDao.getById).toHaveBeenCalled();
    })

    it('should get all employees', async () => {
        let result = null;
        jest.spyOn(employeeDao, 'getAll').mockImplementation(async () => result);
        expect(await employeeService.getAll()).toStrictEqual(result);
        expect(employeeDao.getAll).toHaveBeenCalled()
    })

    it('should update employee', async () => {
        let result = null;
        let employee = null;
        jest.spyOn(employeeDao, 'update').mockImplementation(async () => result);
        expect(await employeeService.update(employee)).toStrictEqual(result);
        expect(employeeDao.update).toHaveBeenCalled()
    })

    it('should delete employee by id', async () => {
        let result = null;
        jest.spyOn(employeeDao, 'deleteById').mockImplementation(async () => result)
        expect((await employeeService.deleteById(1))).toStrictEqual(result);
        expect(employeeDao.deleteById).toHaveBeenCalled();
    })
})