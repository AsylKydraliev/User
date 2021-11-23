import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { User } from './shared/user.modal';
import { GroupService } from './shared/group.service';
import { Group } from './shared/group.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  users!: User[];
  groups!: Group[];

  constructor(
    private userService: UserService,
    private groupService: GroupService,
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.groups = this.groupService.getGroups();
    this.userService.usersChange.subscribe((users: User[]) => {
      this.users = users;
    });
    this.groupService.groupChange.subscribe((groups: Group[]) => {
      this.groups = groups;
    })
  }
}
