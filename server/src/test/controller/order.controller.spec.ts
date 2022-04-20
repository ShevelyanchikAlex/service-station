import {OrderService} from "../../service/order.service";
import {OrderController} from "../../controller/order.controller";

describe('order controller tests', () => {
    let orderService: OrderService;
    let orderController: OrderController;

    beforeAll(() => {
        orderService = new OrderService(null, null);
        orderController = new OrderController(orderService);
    })

    it('should create order', async () => {
        let result = null;
        let order = null;
        jest.spyOn(orderService, 'create').mockImplementation(async () => result);
        expect((await orderController.create(order))).toStrictEqual(result);
        expect(orderService.create).toHaveBeenCalled();
    })

    it('should get order by id', async () => {
        let result = null;
        jest.spyOn(orderService, 'getById').mockImplementation(async () => result);
        expect((await orderController.getById(1))).toStrictEqual(result);
        expect(orderService.getById).toHaveBeenCalled();
    })

    it('should get all orders', async () => {
        let result = null;
        jest.spyOn(orderService, 'getAll').mockImplementation(async () => result);
        expect(await orderController.getAll()).toStrictEqual(result);
        expect(orderService.getAll).toHaveBeenCalled();
    })

    it('should update order', async () => {
        let result = null;
        let order = null;
        jest.spyOn(orderService, 'update').mockImplementation(async () => result);
        expect(await orderController.update(order)).toStrictEqual(result);
        expect(orderService.update).toHaveBeenCalled();
    })

    it('should delete order by id', async () => {
        let result = null;
        jest.spyOn(orderService, 'deleteById').mockImplementation(async () => result);
        expect((await orderController.deleteById(1))).toStrictEqual(result);
        expect(orderService.deleteById).toHaveBeenCalled();
    })
})