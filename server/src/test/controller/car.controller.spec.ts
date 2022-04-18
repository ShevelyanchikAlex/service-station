import {Test, TestingModule} from '@nestjs/testing';
import {CarService} from "../../service/car.service";
import {CarController} from "../../controller/car.controller";
import {CreateCarDto} from "../../dto/car/create.car.dto";
import {UpdateCarDto} from "../../dto/car/update.car.dto";

class CarDaoMock {
    getById(_id: number) {
        return {
            "id": 1,
            "car_number": "0001 AA-7",
            "brand": "BMW",
            "model": "7"
        };
    };

    getAll() {
        return [
            {
                "id": 1,
                "car_number": "0001 AA-7",
                "brand": "BMW",
                "model": "7"
            },
            {
                "id": 2,
                "car_number": "1111 BB-1",
                "brand": "AUDI",
                "model": "a7"
            },
            {
                "id": 3,
                "car_number": "5555 AA-5",
                "brand": "MERCEDES",
                "model": "GLE"
            },
        ];
    }

    create(_carDto: CreateCarDto) {
        return 3;
    }

    update(_carDto: UpdateCarDto) {
        return 3;
    }

    deleteById(_id: number) {
        return true;
    }
}

describe('CarController crud test', () => {
    let carController: CarController;
    let carService: CarService;

    beforeEach(async () => {

        const ApiServiceProvider = {
            provide: CarService,
            useClass: CarDaoMock,
        };
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CarController],
            providers: [CarService, ApiServiceProvider],
        }).compile();

        carService = module.get<CarService>(CarService);
        carController = module.get<CarController>(CarController);
    });

    describe('car crud tests', () => {

        describe('defined carService and carController', () => {
            it('CarService - should be defined', () => {
                expect(carService).toBeDefined();
            });

            it('CarController - should be defined', () => {
                expect(carController).toBeDefined();
            });
        });


        describe('getAllCars', () => {
            it('should get all cars', async () => {
                const expectedCars = [
                    {
                        "id": 1,
                        "car_number": "0001 AA-7",
                        "brand": "BMW",
                        "model": "7"
                    },
                    {
                        "id": 2,
                        "car_number": "1111 BB-1",
                        "brand": "AUDI",
                        "model": "a7"
                    },
                    {
                        "id": 3,
                        "car_number": "5555 AA-5",
                        "brand": "MERCEDES",
                        "model": "GLE"
                    },
                ];

                const cars = await carController.getAll();
                expect(cars).toEqual(expectedCars);
            });
        });

        describe('getCarById', () => {
            it('should get car by id', async () => {
                const id = 1;
                const expectedCar = {
                    "id": 1,
                    "car_number": "0001 AA-7",
                    "brand": "BMW",
                    "model": "7"
                };

                const car = await carController.getById(id);
                expect(car).toEqual(expectedCar);
            });

            it('should return undefined by invalid id', async () => {
                const invalidId = "500";
                const expectedResult = undefined;

                jest.spyOn(carService, 'getById').mockImplementation(async () => expectedResult);
                expect(await carController.getById(invalidId)).toBe(expectedResult);
            });
        });

        describe('create car', () => {
            it('should create car', async () => {
                const car = {
                    "car_number": "1111 CC-1",
                    "brand": "BMW",
                    "model": "5"
                };
                const expectedID = 3;

                const created_id = await carController.create(car);
                expect(created_id).toEqual(expectedID);
            });
        });

        describe('update car', () => {
            it('should update car', async () => {
                const car = {
                    "id": 3,
                    "car_number": "1111 CC-1",
                    "brand": "BMW",
                    "model": "5"
                };
                const expectedID = 3;

                const updated_id = await carController.update(car);
                expect(updated_id).toEqual(expectedID);
            });
        });

        describe('delete car', () => {
            it('should delete car', async () => {
                const car_id = 3;
                const expectedResult = true;

                const result = await carController.deleteById(car_id);
                expect(result).toEqual(expectedResult);
            });
        });
    });
});