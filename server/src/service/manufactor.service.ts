import {Injectable} from "@nestjs/common";
import {ManufactorDao} from "../dao/manufactor.dao";

@Injectable()
export class ManufactorService {
    constructor(private manufactorDao: ManufactorDao) {
    }

    async getAll() {
        return this.manufactorDao.getAll();
    }
}