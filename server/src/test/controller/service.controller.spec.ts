import {ServiceService} from "../../service/service.service";
import {ServiceController} from "../../controller/service.controller";

describe('service service tests', () => {
    let serviceService: ServiceService;
    let serviceController: ServiceController;

    beforeAll(() => {
        serviceService = new ServiceService(null);
        serviceController = new ServiceController(serviceService);
    })

    it('should create service', async () => {
        let result = null;
        let service = null;
        jest.spyOn(serviceService, 'create').mockImplementation(async () => result);
        expect((await serviceController.create(service))).toStrictEqual(result);
        expect(serviceService.create).toHaveBeenCalled();
    })

    it('should get service by id', async () => {
        let result = null;
        jest.spyOn(serviceService, 'getById').mockImplementation(async () => result);
        expect((await serviceController.getById(1))).toStrictEqual(result);
        expect(serviceService.getById).toHaveBeenCalled();
    })

    it('should get all services', async () => {
        let result = null;
        jest.spyOn(serviceService, 'getAll').mockImplementation(async () => result);
        expect(await serviceController.getAll()).toStrictEqual(result);
        expect(serviceService.getAll).toHaveBeenCalled();
    })

    it('should update service', async () => {
        let result = null;
        let manufacturer = null;
        jest.spyOn(serviceService, 'update').mockImplementation(async () => result);
        expect(await serviceController.update(manufacturer)).toStrictEqual(result);
        expect(serviceService.update).toHaveBeenCalled();
    })

    it('should delete service by id', async () => {
        let result = null;
        jest.spyOn(serviceService, 'deleteById').mockImplementation(async () => result);
        expect((await serviceController.deleteById(1))).toStrictEqual(result);
        expect(serviceService.deleteById).toHaveBeenCalled();
    })
})