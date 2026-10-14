import {NgModule} from '@angular/core'
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from '../components/header/header';
import { User } from '../components/user/user';
import { FormsModule } from '@angular/forms';
import { TasksModule } from '../components/tasks/tasks.module';

@NgModule({
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, TasksModule],
})
export class AppModule {}
