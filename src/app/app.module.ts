import {NgModule} from '@angular/core'
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from '../components/header/header';
import { User } from '../components/user/user';
import { Tasks } from '../components/tasks/tasks';
import { NewTask } from '../components/tasks/new-task/new-task';
import { Task } from '../components/tasks/task/task';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Header, User, Tasks, NewTask, Task],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
