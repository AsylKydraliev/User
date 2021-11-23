import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { GroupsComponent } from './groups/groups.component';
import { GroupService } from './shared/group.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
