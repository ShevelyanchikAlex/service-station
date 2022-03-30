import {IsDateString, IsEnum, IsNumberString} from "class-validator";

enum OrderStatus {
    NEW,
    IN_PROGRESS,
    COMPLETED,
    CANCELED,
    CONFIRMED,
}

export class CreateOrderDto {
    @IsEnum(OrderStatus)
    status: OrderStatus;
    @IsDateString()
    created_at: string;
    @IsDateString()
    completed_at: string;
    @IsNumberString()
    cost: number;
    @IsNumberString()
    car_id: number;
}
