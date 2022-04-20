import {ServiceDao} from "../../dao/service.dao";
import {ServiceService} from "../../service/service.service";

describe('service service tests', () => {
    let serviceDao: ServiceDao;
    let serviceService: ServiceService;

    beforeAll(() => {
        serviceDao = new ServiceDao();
        serviceService = new ServiceService(serviceDao);
    })

    it('should create service', async () => {
        let result = null;
        let service = null;
        jest.spyOn(serviceDao, 'create').mockImplementation(async () => result);
        expect((await serviceService.create(service))).toStrictEqual(result);
        expect(serviceDao.create).toHaveBeenCalled();
    })

    it('should get service by id', async () => {
        let result = null;
        jest.spyOn(serviceDao, 'getById').mockImplementation(async () => result);
        expect((await serviceService.getById(1))).toStrictEqual(result);
        expect(serviceDao.getById).toHaveBeenCalled();
    })

    it('should get all services', async () => {
        let result = null;
        jest.spyOn(serviceDao, 'getAll').mockImplementation(async () => result);
        expect(await serviceService.getAll()).toStrictEqual(result);
        expect(serviceDao.getAll).toHaveBeenCalled();
    })

    it('should update service', async () => {
        let result = null;
        let manufacturer = null;
        jest.spyOn(serviceDao, 'update').mockImplementation(async () => result);
        expect(await serviceService.update(manufacturer)).toStrictEqual(result);
        expect(serviceDao.update).toHaveBeenCalled();
    })

    it('should delete service by id', async () => {
        let result = null;
        jest.spyOn(serviceDao, 'deleteById').mockImplementation(async () => result);
        expect((await serviceService.deleteById(1))).toStrictEqual(result);
        expect(serviceDao.deleteById).toHaveBeenCalled();
    })
})