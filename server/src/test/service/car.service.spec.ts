import {CarDao} from "../../dao/car.dao";
import {CarService} from "../../service/car.service";

describe('car service tests', () => {
    let carDao: CarDao;
    let carService: CarService;

    beforeAll(() => {
        carDao = new CarDao()
        carService = new CarService(carDao);
    })

    it('should create car', async () => {
        let result = null;
        let car = null;
        jest.spyOn(carDao, 'create').mockImplementation(async () => result)
        expect((await carService.create(car))).toStrictEqual(result);
        expect(carDao.create).toHaveBeenCalled();
    })

    it('should get car by id', async () => {
        let result = null;
        jest.spyOn(carDao, 'getById').mockImplementation(async () => result)
        expect((await carService.getById(1))).toStrictEqual(result);
        expect(carDao.getById).toHaveBeenCalled();
    })

    it('should get all cars', async () => {
        let result = null;
        jest.spyOn(carDao, 'getAll').mockImplementation(async () => result);
        expect(await carService.getAll()).toStrictEqual(result);
        expect(carDao.getAll).toHaveBeenCalled()
    })

    it('should update car', async () => {
        let result = null;
        let car = null;
        jest.spyOn(carDao, 'update').mockImplementation(async () => result);
        expect(await carService.update(car)).toStrictEqual(result);
        expect(carDao.update).toHaveBeenCalled()
    })

    it('should delete car by id', async () => {
        let result = null;
        jest.spyOn(carDao, 'deleteById').mockImplementation(async () => result)
        expect((await carService.deleteById(1))).toStrictEqual(result);
        expect(carDao.deleteById).toHaveBeenCalled();
    })
})