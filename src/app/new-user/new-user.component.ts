import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('userStatus') userStatus!: ElementRef;
  @ViewChild('chooseSelect') chooseSelect!: ElementRef;


}
