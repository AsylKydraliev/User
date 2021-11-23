import { Group } from './group.modal';
import { EventEmitter } from '@angular/core';
import { User } from './user.modal';

export class GroupService{
  groupChange = new EventEmitter<Group[]>();
  private groups: Group[] = [
    new Group(
      'Book club',
      [new User('Ivan', 'ivanov@gmail.com', false, 'user')],
      false
    ),
    new Group(
      'Hiking group',
      [new User('Petr', 'petrov@gmail.com', false, 'user')],
      false
    ),
  ]

  getGroups(){
    return this.groups.slice();
  }

  addGroups(group: Group){
    this.groups.push(group);
    this.groupChange.emit(this.groups);
  }
}
