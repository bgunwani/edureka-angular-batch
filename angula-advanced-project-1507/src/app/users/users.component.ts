import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  value: number = 0;

  userObj: any = {
    firstName: 'King',
    lastName: 'Kochhar',
    salary: 112234.56789,
    currentDate: new Date()
  }

  addCSSStyles() {
    let myStyles = {
      'color': 'red',
      'font-weight': 'bold',
      'font-style': 'italic'
    }
    return myStyles;
  }

  usersList: any[] = [
    { Name: 'John', Age: 23, Gender: 'Male' },
    { Name: 'King', Age: 30, Gender: 'Male' },
    { Name: 'Sarah', Age: 33, Gender: 'Female' },
    { Name: 'Roger', Age: 43, Gender: 'Male' },
    { Name: 'Sujatha', Age: 24, Gender: 'Female' }
  ]

  addCssClasses(flag: string) {
    let cssClasses;
    if (flag == 'Type 1') {
      cssClasses = {
        'style_one': true,
        'style_two': true
      }
    } else {
      cssClasses = {
        'style_five': true,
        'style_two': true
      }
    }
    return cssClasses;
  }

}
