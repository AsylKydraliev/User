import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../shared/user.modal';
import { UserService } from '../shared/user.service';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.modal';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  statusUser = false;
  userStatusInfo = 'Status';
  userName = '';
  groupUserName: User[] = [];
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('userStatus') userStatus!: ElementRef;
  @ViewChild('chooseSelect') chooseSelect!: ElementRef;
  @ViewChild('groupNameInput') groupNameInput!: ElementRef;

  constructor(private userService: UserService, private groupService: GroupService) {}

  getValue() {
    this.userName = this.nameInput.nativeElement.value;
    const userEmail = this.emailInput.nativeElement.value;
    const statusUser = this.userStatus.nativeElement.checked;
    const userSelect = this.chooseSelect.nativeElement.value;

    const user = new User(this.userName, userEmail, statusUser, userSelect);
    this.userService.addUsers(user);
  }

  getGroupInputValue(){
    const groupInputValue = this.groupNameInput.nativeElement.value;
    const group = new Group(groupInputValue, this.groupUserName, false);
    this.groupService.addGroups(group);
  }

  getStatus(){
    if (this.userStatus.nativeElement.checked) {
      this.statusUser = true;
      return this.userStatusInfo = 'Active';
    } else {
      this.statusUser = false;
      return this.userStatusInfo = 'Inactive';
    }
  }
}
