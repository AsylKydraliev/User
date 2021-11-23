import { Component, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { User } from '../shared/user.modal';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  @Input() index!: number;
  groupStatus = false;
  groupItemBorder = '';
  @Input() name = '';
  @Input() users!: User[];

  constructor(private groupService: GroupService) {}

  onClick(index: number) {
    this.groupStatus = true;
    this.groupItemBorder = 'border-primary shadow-lg bg-white';
    this.groupService.getGroups().forEach(item => {
      item.status = this.groupService.getGroups()[index] === item;
    });
    console.log(this.groupService.getGroups());
  }
}
