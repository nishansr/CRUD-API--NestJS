import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [PrismaService]
})
export class TaskModule {}
