import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit{
  @Input() index!: number;
  @Input() name = '';
  @Input() email = '';
  @Input() status = false;
  @Input() role = '';
  userItemBorder = '';
  groups!: Group[];

  constructor(private userService: UserService, private serviceGroup: GroupService) {}

  ngOnInit() {
    this.groups = this.serviceGroup.getGroups();
    this.serviceGroup.groupChange.subscribe((groups: Group[]) => {
      this.groups = groups;
    });
  }

  addUserToGroup(index: number){
    this.userItemBorder = 'border-primary shadow-lg bg-white';
    const user = this.userService.getUsers()[index];
    this.groups.forEach(item=>{
      if(item.status){
        item.users.push(user);
      }
    });
  }
}





