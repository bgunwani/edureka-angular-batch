import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  projects: string[] = ["E-Commerce", "Accounting", "Admin Portal"];

  users: any = [
    { userId: 101, userName: "King Kochhar", userAge: 23 },
    { userId: 102, userName: "Gautam Bhalla", userAge: 34 },
    { userId: 103, userName: "Shreya Sharma", userAge: 40 },
    { userId: 104, userName: "Karthik Sharma", userAge: 43 },
    { userId: 105, userName: "Sarah Bowling", userAge: 54 }
  ]

  isLoggedIn: boolean = false;

}
