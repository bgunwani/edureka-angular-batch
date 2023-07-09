import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userObj: any = {
    firstName: 'King',
    lastName: 'Kochhar',
    salary: 112234.56789,
    currentDate: new Date()
  }

}
