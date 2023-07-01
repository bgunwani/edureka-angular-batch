import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result) => {
        this.users = result;
        console.log(this.users);
      }, (error) => {
        console.log(error);
      })
  }



}
