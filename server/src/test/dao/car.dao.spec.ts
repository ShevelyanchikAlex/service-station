import {CarDao} from "../../dao/car.dao";
import prisma from "../../../lib/prisma";

let carDao: CarDao = new CarDao();

describe('car dao tests', () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    })

    afterAll(async () => {
        await prisma.car.deleteMany();
    })

    it('should create car', async () => {
        let car = {
            car_number: '1111 AX-7',
            brand: 'BMW',
            model: 'M5',
            id: undefined,
        };
        let createdCar = await carDao.create(car);
        car.id = createdCar.id;
        expect(createdCar).toStrictEqual(car);
    })

    it('should get car by id', async () => {
        let car = {
            car_number: '1111 AX-7',
            brand: 'BMW',
            model: 'M5',
            id: undefined,
        };
        let createdCar = await carDao.create(car);
        let id = createdCar.id;
        car.id = id;
        expect((await carDao.getById(id))).toStrictEqual(car)
    })

    it('should get all cars', async () => {
        let car1 = {
            car_number: '2222 AX-7',
            brand: 'BMW',
            model: 'M5',
            id: undefined,
        };
        let car2 = {
            car_number: '1111 AX-7',
            brand: 'AUDI',
            model: 'Q7',
            id: undefined,
        };
        let car3 = {
            car_number: '3333 AX-7',
            brand: 'Seat',
            model: 'Ibiza',
            id: undefined,
        };
        let cars = [];
        cars.push(car1);
        cars.push(car2);
        cars.push(car3);

        await carDao.create(car1);
        await carDao.create(car2);
        await carDao.create(car3);

        let createdCars = await carDao.getAll();
        expect(createdCars.length).toBe(3);

        for (let i = 0; i < createdCars.length; i++) {
            cars[i].id = createdCars[i].id;
            expect(createdCars[i]).toStrictEqual(cars[i]);
        }
    })

    it('should update car', async () => {
        let car = {
            car_number: '1111 AX-7',
            brand: 'BMW',
            model: 'M5',
            id: undefined,
        };
        let createdCar = await carDao.create(car);
        car.id = createdCar.id;
        car.model = 'Volvo';
        car.model = 'R2';
        expect((await carDao.update(car))).toStrictEqual(car);
    })

    it('should delete car by id', async () => {
        let car = {
            car_number: '1111 AX-7',
            brand: 'BMW',
            model: 'M5',
            id: undefined,
        };
        let createdCar = await carDao.create(car);
        let id = createdCar.id;
        car.id = id;
        let deletedCar = await carDao.deleteById(id);
        expect((await carDao.getAll()).length).toBe(0);
        expect(deletedCar).toStrictEqual(car);
    })

    it('should thrown error on unique car_number constraint', async () => {
        let car = {
            car_number: '1111 AX-7',
            brand: 'BMW',
            model: 'M5',
        };
        await carDao.create(car);
        const createCarWithSameNumber = async () => {
            await carDao.create(car);
        }
        await expect(createCarWithSameNumber()).rejects.toThrow();
    })
})

