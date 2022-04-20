import prisma from "../../../lib/prisma";
import {ManufacturerDao} from "../../dao/manufacturer.dao";

let manufacturerDao: ManufacturerDao = new ManufacturerDao();

describe('manufacturer dao tests', () => {
    beforeEach(async () => {
        await prisma.manufacturer.deleteMany();
    })

    afterAll(async () => {
        await prisma.manufacturer.deleteMany();
    })

    let manufacturer = {
        name: "AUDI",
        id: undefined,
    };

    it('should create manufacturer', async () => {
        let createdManufacturer = await manufacturerDao.create(manufacturer);
        manufacturer.id = createdManufacturer.id;
        expect(createdManufacturer).toStrictEqual(manufacturer);
    })

    it('should get manufacturer by id', async () => {
        let createdManufacturer = await manufacturerDao.create(manufacturer);
        manufacturer.id = createdManufacturer.id;
        expect((await manufacturerDao.getById(createdManufacturer.id))).toStrictEqual(manufacturer);
    })

    it('should get all manufacturers', async () => {
        let manufacturer1 = {
            name: "AUDI",
            id: undefined,
        };
        let manufacturer2 = {
            name: "MERCEDES",
            id: undefined,
        };
        let manufacturer3 = {
            name: "BMW",
            id: undefined,
        };
        let manufacturers = [];
        manufacturers.push(manufacturer1);
        manufacturers.push(manufacturer2);
        manufacturers.push(manufacturer3);

        await manufacturerDao.create(manufacturer1);
        await manufacturerDao.create(manufacturer2);
        await manufacturerDao.create(manufacturer3);

        let createdManufacturers = await manufacturerDao.getAll();
        expect(createdManufacturers.length).toBe(3);

        for (let i = 0; i < createdManufacturers.length; i++) {
            manufacturers[i].id = createdManufacturers[i].id;
            expect(createdManufacturers[i]).toStrictEqual(manufacturers[i]);
        }
    })

    it('should update manufacturer', async () => {
        let createdManufacturer = await manufacturerDao.create(manufacturer);
        manufacturer.id = createdManufacturer.id;
        manufacturer.name = 'GMC';
        expect((await manufacturerDao.update(manufacturer))).toStrictEqual(manufacturer);
    })

    it('should delete manufacturer by id', async () => {
        let createdManufacturer = await manufacturerDao.create(manufacturer);
        let id = createdManufacturer.id;
        manufacturer.id = id;
        await manufacturerDao.deleteById(id);
        expect((await manufacturerDao.getAll()).length).toBe(0);
    })
})

