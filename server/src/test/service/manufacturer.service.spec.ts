import {ManufacturerDao} from "../../dao/manufacturer.dao";
import {ManufacturerService} from "../../service/manufacturer.service";

describe('manufacturer service tests', () => {
    let manufacturerDao: ManufacturerDao;
    let manufacturerService: ManufacturerService;

    beforeAll(() => {
        manufacturerDao = new ManufacturerDao();
        manufacturerService = new ManufacturerService(manufacturerDao);
    })

    it('should create manufacturer', async () => {
        let result = null;
        let manufacturer = null;
        jest.spyOn(manufacturerDao, 'create').mockImplementation(async () => result);
        expect((await manufacturerService.create(manufacturer))).toStrictEqual(result);
        expect(manufacturerDao.create).toHaveBeenCalled();
    })

    it('should get manufacturer by id', async () => {
        let result = null;
        jest.spyOn(manufacturerDao, 'getById').mockImplementation(async () => result);
        expect((await manufacturerService.getById(1))).toStrictEqual(result);
        expect(manufacturerDao.getById).toHaveBeenCalled();
    })

    it('should get all manufacturers', async () => {
        let result = null;
        jest.spyOn(manufacturerDao, 'getAll').mockImplementation(async () => result);
        expect(await manufacturerService.getAll()).toStrictEqual(result);
        expect(manufacturerDao.getAll).toHaveBeenCalled()
    })

    it('should update manufacturer', async () => {
        let result = null;
        let manufacturer = null;
        jest.spyOn(manufacturerDao, 'update').mockImplementation(async () => result);
        expect(await manufacturerService.update(manufacturer)).toStrictEqual(result);
        expect(manufacturerDao.update).toHaveBeenCalled()
    })

    it('should delete manufacturer by id', async () => {
        let result = null;
        jest.spyOn(manufacturerDao, 'deleteById').mockImplementation(async () => result)
        expect((await manufacturerService.deleteById(1))).toStrictEqual(result);
        expect(manufacturerDao.deleteById).toHaveBeenCalled();
    })
})