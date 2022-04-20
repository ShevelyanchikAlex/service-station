import prisma from "../../../lib/prisma";
import {OrderDao} from "../../dao/order.dao";
import {CarDao} from "../../dao/car.dao";

let carDao: CarDao = new CarDao();
let orderDao: OrderDao = new OrderDao();

describe('order dao tests', () => {
    beforeEach(async () => {
        await prisma.order.deleteMany();
        await prisma.car.deleteMany();
    })

    afterAll(async () => {
        await prisma.order.deleteMany();
        await prisma.car.deleteMany();
    })

    let car = {
        car_number: '2222 AX-7',
        brand: 'BMW',
        model: 'M5',
        id: undefined,
    };


    it('should create order', async () => {
        let createdCar = await carDao.create(car);
        let order = {
            status: 'IN_PROGRESS',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 1000,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let createdOrder = await orderDao.create(order);
        order.id = createdOrder.id;
        order.car = createdOrder.car;
        expect(createdOrder).toStrictEqual(order);
    })

    it('should get order by id', async () => {
        let createdCar = await carDao.create(car);
        let order = {
            status: 'IN_PROGRESS',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 1000,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let createdOrder = await orderDao.create(order);
        order.id = createdOrder.id;
        order.car = createdOrder.car;
        expect((await orderDao.getById(createdOrder.id))).toStrictEqual(order);
    })

    it('should get all orders', async () => {
        let createdCar = await carDao.create(car);
        let order1 = {
            status: 'IN_PROGRESS',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 1000,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let order2 = {
            status: 'COMPLETED',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 200,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let order3 = {
            status: 'IN_PROGRESS',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 4000,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let orders = [];
        orders.push(order1);
        orders.push(order2);
        orders.push(order3);

        await orderDao.create(order1);
        await orderDao.create(order2);
        await orderDao.create(order3);

        let createdOrders = await orderDao.getAll();
        expect(createdOrders.length).toBe(3);

        for (let i = 0; i < createdOrders.length; i++) {
            orders[i].id = createdOrders[i].id;
            orders[i].car = createdOrders[i].car;
            expect(createdOrders[i]).toStrictEqual(orders[i]);
        }
    })

    it('should update order', async () => {
        let createdCar = await carDao.create(car);
        let order = {
            status: 'IN_PROGRESS',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 1000,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let createdOrder = await orderDao.create(order);
        order.id = createdOrder.id;
        order.car = createdOrder.car;
        order.status = 'COMPLETED';
        expect((await orderDao.update(order))).toStrictEqual(order);
    })

    it('should delete order by id', async () => {
        let createdCar = await carDao.create(car);
        let order = {
            status: 'IN_PROGRESS',
            created_at: '2001-04-14T23:39',
            completed_at: '2001-04-14T23:39',
            cost: 1000,
            car_id: +createdCar.id,
            car: undefined,
            services: [],
            id: undefined,
        };
        let createdOrder = await orderDao.create(order);
        order.id = createdOrder.id;
        order.car = createdOrder.car;
        await orderDao.deleteById(order.id);
        expect((await orderDao.getAll()).length).toBe(0);
    })
})

