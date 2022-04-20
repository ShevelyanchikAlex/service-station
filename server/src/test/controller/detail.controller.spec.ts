import {DetailService} from "../../service/detail.service";
import {DetailController} from "../../controller/detail.controller";

describe('detail controller tests', () => {
    let detailService: DetailService;
    let detailController: DetailController;

    beforeAll(() => {
        detailService = new DetailService(null);
        detailController = new DetailController(detailService);
    })

    it('should create detail', async () => {
        let result = null;
        let car = null;
        jest.spyOn(detailService, 'create').mockImplementation(async () => result)
        expect((await detailController.create(car))).toStrictEqual(result);
        expect(detailService.create).toHaveBeenCalled();
    })

    it('should get detail by id', async () => {
        let result = null;
        jest.spyOn(detailService, 'getById').mockImplementation(async () => result)
        expect((await detailController.getById(1))).toStrictEqual(result);
        expect(detailService.getById).toHaveBeenCalled();
    })

    it('should get all details', async () => {
        let result = null;
        jest.spyOn(detailService, 'getAll').mockImplementation(async () => result);
        expect(await detailController.getAll()).toStrictEqual(result);
        expect(detailService.getAll).toHaveBeenCalled()
    })

    it('should update detail', async () => {
        let result = null;
        let car = null;
        jest.spyOn(detailService, 'update').mockImplementation(async () => result);
        expect(await detailController.update(car)).toStrictEqual(result);
        expect(detailService.update).toHaveBeenCalled()
    })

    it('should delete detail by id', async () => {
        let result = null;
        jest.spyOn(detailService, 'deleteById').mockImplementation(async () => result)
        expect((await detailController.deleteById(1))).toStrictEqual(result);
        expect(detailService.deleteById).toHaveBeenCalled();
    })
})