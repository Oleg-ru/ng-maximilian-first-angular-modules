import {Component} from '@angular/core';
import {DUMMY_USERS} from '../components/user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  userId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userId);
  }

  onSelectUser(id: string) {
    this.userId = id;
  }
}
