import { Component, Input } from '@angular/core';
import { User } from '../shared/user.modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  users!: User[];

  @Input() name = '';
  @Input() email = '';
  @Input() role = '';
}
