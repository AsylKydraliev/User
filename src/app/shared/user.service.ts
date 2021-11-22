import { User } from './user.modal';
import { EventEmitter } from '@angular/core';

export class UserService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    new User('Ivan', 'ivanov@gmail.com', false, 'user'),
    new User('Petr', 'petrov@gmail.com', false, 'user'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUsers(user: User){
    this.users.push(user);
    this.usersChange.emit(this.users);
  }
}
