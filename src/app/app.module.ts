import {NgModule} from '@angular/core'
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from '../components/header/header';
import { User } from '../components/user/user';
import { Tasks } from '../components/tasks/tasks';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule ,Header, User, Tasks],
})
export class AppModule {}
