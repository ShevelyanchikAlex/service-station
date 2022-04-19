import {CarService} from "../../service/car.service";
import {CarController} from "../../controller/car.controller";

describe('car controller tests', () => {
    let carService: CarService;
    let carController: CarController;

    beforeAll(() => {
        carService = new CarService(null);
        carController = new CarController(carService);
    })

    it('should create car', async () => {
        let result = null;
        let car = null;
        jest.spyOn(carService, 'create').mockImplementation(async () => result)
        expect((await carController.create(car))).toStrictEqual(result);
        expect(carService.create).toHaveBeenCalled();
    })

    it('should get car by id', async () => {
        let result = null;
        jest.spyOn(carService, 'getById').mockImplementation(async () => result)
        expect((await carController.getById(1))).toStrictEqual(result);
        expect(carService.getById).toHaveBeenCalled();
    })

    it('should get all cars', async () => {
        let result = null;
        jest.spyOn(carService, 'getAll').mockImplementation(async () => result);
        expect(await carController.getAll()).toStrictEqual(result);
        expect(carService.getAll).toHaveBeenCalled()
    })

    it('should update car', async () => {
        let result = null;
        let car = null;
        jest.spyOn(carService, 'update').mockImplementation(async () => result);
        expect(await carController.update(car)).toStrictEqual(result);
        expect(carService.update).toHaveBeenCalled()
    })

    it('should delete car by id', async () => {
        let result = null;
        jest.spyOn(carService, 'deleteById').mockImplementation(async () => result)
        expect((await carController.deleteById(1))).toStrictEqual(result);
        expect(carService.deleteById).toHaveBeenCalled();
    })
})