import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'O título é obrigatório' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}