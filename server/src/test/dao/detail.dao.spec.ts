import prisma from "../../../lib/prisma";
import {DetailDao} from "../../dao/detail.dao";
import {ManufacturerDao} from "../../dao/manufacturer.dao";

let detailDao: DetailDao = new DetailDao();

describe('detail dao tests', () => {
    let manufacturer_id;
    beforeAll(async () => {
        let manufacturer = {
            name: 'AUDI',
        }
        manufacturer_id = (await new ManufacturerDao().create(manufacturer)).id;
    })

    beforeEach(async () => {
        await prisma.detail.deleteMany();
    })

    afterAll(async () => {
        await prisma.detail.deleteMany();
        await prisma.manufacturer.deleteMany();
    })

    it('should create detail', async () => {
        let detail = {
            name: 'Engine',
            price: 100,
            warranty: 1,
            manufacturer_id: manufacturer_id,
            id: undefined,
            manufacturer: undefined,
        };
        let createdDetail = await detailDao.create(detail);
        detail.id = createdDetail.id;
        detail.manufacturer = createdDetail.manufacturer;
        expect(createdDetail).toStrictEqual(detail);
    })

    it('should get detail by id', async () => {
        let detail = {
            name: 'Engine',
            price: 100,
            warranty: 1,
            manufacturer_id: manufacturer_id,
            id: undefined,
            manufacturer: undefined,
        };
        let createdDetail = await detailDao.create(detail);
        let id = createdDetail.id;
        detail.id = id;
        detail.manufacturer = createdDetail.manufacturer;
        expect((await detailDao.getById(id))).toStrictEqual(detail)
    })

    it('should get all details', async () => {
        let detail1 = {
            name: 'Engine1',
            price: 100,
            warranty: 1,
            manufacturer_id: manufacturer_id,
            id: undefined,
            manufacturer: undefined,
        };
        let detail2 = {
            name: 'Engine2',
            price: 200,
            warranty: 2,
            manufacturer_id: manufacturer_id,
            id: undefined,
            manufacturer: undefined,
        };
        let detail3 = {
            name: 'Engine3',
            price: 300,
            warranty: 3,
            manufacturer_id: manufacturer_id,
            id: undefined,
            manufacturer: undefined,
        };
        let details = [];
        details.push(detail1);
        details.push(detail2);
        details.push(detail3);

        await detailDao.create(detail1);
        await detailDao.create(detail2);
        await detailDao.create(detail3);

        let createdDetails = await detailDao.getAll();
        expect(createdDetails.length).toBe(3);

        for (let i = 0; i < createdDetails.length; i++) {
            details[i].id = createdDetails[i].id;
            details[i].manufacturer = createdDetails[i].manufacturer;
            expect(createdDetails[i]).toStrictEqual(details[i]);
        }
    })

    it('should update detail', async () => {
        let detail = {
            name: 'Engine',
            price: 100,
            warranty: 1,
            manufacturer_id: manufacturer_id,
            id: undefined,
            manufacturer: undefined,
        };
        let createdDetail = await detailDao.create(detail);
        detail.id = createdDetail.id;
        detail.manufacturer = createdDetail.manufacturer;
        detail.name = 'Koleso';
        detail.price = 123;
        expect((await detailDao.update(detail))).toStrictEqual(detail);
    })

    it('should delete detail by id', async () => {
        let detail = {
            name: 'Engine',
            price: 100,
            warranty: 1,
            manufacturer_id: manufacturer_id,
            id: undefined,
        };
        let createdDetail = await detailDao.create(detail);
        let id = createdDetail.id;
        detail.id = id;
        let deletedDetail = await detailDao.deleteById(id);
        expect((await detailDao.getAll()).length).toBe(0);
        expect(deletedDetail).toStrictEqual(detail);
    })
})