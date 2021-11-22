import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { User } from './shared/user.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  users!: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.usersChange.subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
