import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: PrismaService) { }

  
  @Post()
  async addTask(@Body() taskBody: CreateTaskDto)  {
    await this.taskService.task.create({
      data: taskBody,
    });

    return "Success";
  }

  @Get()
  async getTasks() {
    const value = await this.taskService.task.findMany();
    return value;
  }
  @Get(':taskName')
  async searchTask(@Param('taskName') taskName: string) {
    const value = await this.taskService.task.findFirst({
      where:{
        taskName:taskName
      }
    })
    return value;
    // return this.arr.filter((task) => (task.taskName = taskName));
  }
}