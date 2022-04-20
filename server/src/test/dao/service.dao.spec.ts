import prisma from "../../../lib/prisma";
import {ServiceDao} from "../../dao/service.dao";

let serviceDao: ServiceDao = new ServiceDao();

describe('service dao tests', () => {
    beforeEach(async () => {
        await prisma.service.deleteMany();
    })

    afterAll(async () => {
        await prisma.service.deleteMany();
    })

    let service = {
        name: 'service 1',
        price: 1000,
        warranty: 2,
        description: 'some desc',
        duration: 3,
        details: [],
        id: undefined,
    };


    it('should create service', async () => {
        let createdService = await serviceDao.create(service);
        service.id = createdService.id;
        expect(createdService).toStrictEqual(service);
    })

    it('should get service by id', async () => {
        let createdService = await serviceDao.create(service);
        service.id = createdService.id;
        expect((await serviceDao.getById(createdService.id))).toStrictEqual(service);
    })

    it('should get all services', async () => {
        let service1 = {
            name: 'service 1',
            price: 1000,
            warranty: 2,
            description: 'some 1 desc',
            duration: 1,
            details: [],
            id: undefined,
        };
        let service2 = {
            name: 'service 1',
            price: 1200,
            warranty: 1,
            description: 'some 2 desc',
            duration: 3,
            details: [],
            id: undefined,
        };
        let service3 = {
            name: 'service 3',
            price: 1300,
            warranty: 3,
            description: 'some 3 desc',
            duration: 2,
            details: [],
            id: undefined,
        };
        let services = [];
        services.push(service1);
        services.push(service2);
        services.push(service3);

        await serviceDao.create(service1);
        await serviceDao.create(service2);
        await serviceDao.create(service3);

        let createdServices = await serviceDao.getAll();
        expect(createdServices.length).toBe(3);

        for (let i = 0; i < createdServices.length; i++) {
            services[i].id = createdServices[i].id;
            expect(createdServices[i]).toStrictEqual(services[i]);
        }
    })

    it('should update service', async () => {
        let createdService = await serviceDao.create(service);
        service.id = createdService.id;
        service.description = 'new desc';
        expect((await serviceDao.update(service))).toStrictEqual(service);
    })

    it('should delete service by id', async () => {
        let createdService = await serviceDao.create(service);
        service.id = createdService.id;
        await serviceDao.deleteById(service.id);
        expect((await serviceDao.getAll()).length).toBe(0);
    })
})

