import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 users = DUMMY_USERS;

 selectUserId = '';

//  get selectUser() {
//   return this.users.find(user => user.id === this.selectUserId)!;
//  }
 get selectUser() {
  return this.users.find(user => user.id === this.selectUserId);
}


 onSelectUser(id: string) {
  this.selectUserId = id;
 }

}
