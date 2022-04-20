import {ManufacturerService} from "../../service/manufacturer.service";
import {ManufacturerController} from "../../controller/manufacturer.controller";

describe('job controller tests', () => {
    let manufacturerService: ManufacturerService;
    let manufacturerController: ManufacturerController;

    beforeAll(() => {
        manufacturerService = new ManufacturerService(null);
        manufacturerController = new ManufacturerController(manufacturerService);
    })

    it('should create manufacturer', async () => {
        let result = null;
        let manufacturer = null;
        jest.spyOn(manufacturerService, 'create').mockImplementation(async () => result);
        expect((await manufacturerController.create(manufacturer))).toStrictEqual(result);
        expect(manufacturerService.create).toHaveBeenCalled();
    })

    it('should get manufacturer by id', async () => {
        let result = null;
        jest.spyOn(manufacturerService, 'getById').mockImplementation(async () => result);
        expect((await manufacturerController.getById(1))).toStrictEqual(result);
        expect(manufacturerService.getById).toHaveBeenCalled();
    })

    it('should get all manufacturers', async () => {
        let result = null;
        jest.spyOn(manufacturerService, 'getAll').mockImplementation(async () => result);
        expect(await manufacturerController.getAll()).toStrictEqual(result);
        expect(manufacturerService.getAll).toHaveBeenCalled();
    })

    it('should update manufacturer', async () => {
        let result = null;
        let manufacturer = null;
        jest.spyOn(manufacturerService, 'update').mockImplementation(async () => result);
        expect(await manufacturerController.update(manufacturer)).toStrictEqual(result);
        expect(manufacturerService.update).toHaveBeenCalled();
    })

    it('should delete manufacturer by id', async () => {
        let result = null;
        jest.spyOn(manufacturerService, 'deleteById').mockImplementation(async () => result);
        expect((await manufacturerController.deleteById(1))).toStrictEqual(result);
        expect(manufacturerService.deleteById).toHaveBeenCalled();
    })
})