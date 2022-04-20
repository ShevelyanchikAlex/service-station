import {OrderDao} from "../../dao/order.dao";
import {OrderService} from "../../service/order.service";
import {ServiceService} from "../../service/service.service";
import {ServiceDao} from "../../dao/service.dao";

describe('order service tests', () => {
    let orderDao: OrderDao;
    let serviceDao: ServiceDao;
    let orderService: OrderService;
    let serviceService: ServiceService;

    beforeAll(() => {
        orderDao = new OrderDao();
        serviceDao = new ServiceDao();
        serviceService = new ServiceService(serviceDao);
        orderService =  new OrderService(orderDao, null);
    })

    it('should create order', async () => {
        let result = null;
        let order = {
            services: [],
        };
        jest.spyOn(orderDao, 'create').mockImplementation(async () => result);
        expect((await orderService.create(order))).toStrictEqual(result);
        expect(orderDao.create).toHaveBeenCalled();
    })

    it('should get order by id', async () => {
        let result = null;
        jest.spyOn(orderDao, 'getById').mockImplementation(async () => result);
        expect((await orderService.getById(1))).toStrictEqual(result);
        expect(orderDao.getById).toHaveBeenCalled();
    })

    it('should get all order', async () => {
        let result = null;
        jest.spyOn(orderDao, 'getAll').mockImplementation(async () => result);
        expect(await orderService.getAll()).toStrictEqual(result);
        expect(orderDao.getAll).toHaveBeenCalled();
    })

    it('should update order', async () => {
        let result = null;
        let order = {
            services: [],
        };
        jest.spyOn(orderDao, 'update').mockImplementation(async () => result);
        expect(await orderService.update(order)).toStrictEqual(result);
        expect(orderDao.update).toHaveBeenCalled();
    })

    it('should delete order by id', async () => {
        let result = null;
        jest.spyOn(orderDao, 'deleteById').mockImplementation(async () => result);
        expect((await orderService.deleteById(1))).toStrictEqual(result);
        expect(orderDao.deleteById).toHaveBeenCalled();
    })
})