import {EmployeeService} from "../../service/employee.service";
import {EmployeeController} from "../../controller/employee.controller";

describe('employee controller tests', () => {
    let employeeService: EmployeeService;
    let employeeController: EmployeeController;

    beforeAll(() => {
        employeeService = new EmployeeService(null);
        employeeController = new EmployeeController(employeeService);
    })

    it('should create employee', async () => {
        let result = null;
        let employee = null;
        jest.spyOn(employeeService, 'create').mockImplementation(async () => result)
        expect((await employeeController.create(employee))).toStrictEqual(result);
        expect(employeeService.create).toHaveBeenCalled();
    })

    it('should get employee by id', async () => {
        let result = null;
        jest.spyOn(employeeService, 'getById').mockImplementation(async () => result)
        expect((await employeeController.getById(1))).toStrictEqual(result);
        expect(employeeService.getById).toHaveBeenCalled();
    })

    it('should get all employees', async () => {
        let result = null;
        jest.spyOn(employeeService, 'getAll').mockImplementation(async () => result);
        expect(await employeeController.getAll()).toStrictEqual(result);
        expect(employeeService.getAll).toHaveBeenCalled()
    })

    it('should update employee', async () => {
        let result = null;
        let employee = null;
        jest.spyOn(employeeService, 'update').mockImplementation(async () => result);
        expect(await employeeController.update(employee)).toStrictEqual(result);
        expect(employeeService.update).toHaveBeenCalled()
    })

    it('should delete employee by id', async () => {
        let result = null;
        jest.spyOn(employeeService, 'deleteById').mockImplementation(async () => result)
        expect((await employeeController.deleteById(1))).toStrictEqual(result);
        expect(employeeService.deleteById).toHaveBeenCalled();
    })
})