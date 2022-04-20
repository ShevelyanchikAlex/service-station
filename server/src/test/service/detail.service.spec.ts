import {DetailDao} from "../../dao/detail.dao";
import {DetailService} from "../../service/detail.service";

describe('detail service tests', () => {
    let detailDao: DetailDao;
    let detailService: DetailService;

    beforeAll(() => {
        detailDao = new DetailDao()
        detailService = new DetailService(detailDao);
    })

    it('should create detail', async () => {
        let result = null;
        let detail = null;
        jest.spyOn(detailDao, 'create').mockImplementation(async () => result)
        expect((await detailService.create(detail))).toStrictEqual(result);
        expect(detailDao.create).toHaveBeenCalled();
    })

    it('should get detail by id', async () => {
        let result = null;
        jest.spyOn(detailDao, 'getById').mockImplementation(async () => result)
        expect((await detailService.getById(1))).toStrictEqual(result);
        expect(detailDao.getById).toHaveBeenCalled();
    })

    it('should get all details', async () => {
        let result = null;
        jest.spyOn(detailDao, 'getAll').mockImplementation(async () => result);
        expect(await detailService.getAll()).toStrictEqual(result);
        expect(detailDao.getAll).toHaveBeenCalled()
    })

    it('should update detail', async () => {
        let result = null;
        let detail = null;
        jest.spyOn(detailDao, 'update').mockImplementation(async () => result);
        expect(await detailService.update(detail)).toStrictEqual(result);
        expect(detailDao.update).toHaveBeenCalled()
    })

    it('should delete detail by id', async () => {
        let result = null;
        jest.spyOn(detailDao, 'deleteById').mockImplementation(async () => result)
        expect((await detailService.deleteById(1))).toStrictEqual(result);
        expect(detailDao.deleteById).toHaveBeenCalled();
    })
})