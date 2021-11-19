import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../shared/user.modal';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('userStatus') userStatus!: ElementRef;
  @ViewChild('chooseSelect') chooseSelect!: ElementRef;

  constructor(public userService: UserService) {}

  getValue(){
    const userName = this.nameInput.nativeElement.value;
    const userEmail = this.emailInput.nativeElement.value;
    const userStatus = this.userStatus.nativeElement.value;
    const userSelect = this.chooseSelect.nativeElement.value;

    const user = new User(userName, userEmail, userStatus, userSelect);
    this.userService.users.push(user);
  }
}
