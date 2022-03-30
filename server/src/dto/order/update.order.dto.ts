import {CreateOrderDto} from "./create.order.dto";
import {IsNumberString} from "class-validator";

export class UpdateOrderDto extends CreateOrderDto {
    @IsNumberString()
    id: number;
}