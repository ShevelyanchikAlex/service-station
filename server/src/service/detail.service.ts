import {Injectable} from "@nestjs/common";
import {DetailDao} from "../dao/detail.dao";

@Injectable()
export class DetailService {
    constructor(private detailDao: DetailDao) {
    }

    async getAll() {
        return this.detailDao.getAll();
    }
}