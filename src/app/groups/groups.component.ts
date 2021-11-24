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
  groupItemBorder = 'border-primary shadow-lg bg-white';
  @Input() name = '';
  @Input() status = false;
  @Input() users!: User[];

  constructor(private groupService: GroupService) {}

  onClick(index: number) {
    this.groupService.getGroups().forEach(item => {
      item.status = this.groupService.getGroups()[index] === item;
    });
  }
}
