import { IsString, IsBoolean } from "class-validator";

export class CreateTaskDto{
    @IsString()
    taskName: string;

    @IsBoolean()
    taskStatus: boolean;
}