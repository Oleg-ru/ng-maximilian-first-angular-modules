import { NgModule } from '@angular/core';
import { Tasks } from './tasks';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Tasks, NewTask, Task],
  exports: [Tasks],
  imports: [DatePipe, FormsModule]
})
export class TasksModule {}
