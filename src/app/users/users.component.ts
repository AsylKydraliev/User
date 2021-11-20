import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() name = '';
  @Input() email = '';
  @Input() status = false;
  @Input() role = '';
}





