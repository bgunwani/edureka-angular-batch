import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<object> = [
    {
      "id": 101,
      "name": "King Kochhar",
      "age": 23
    },
    {
      "id": 102,
      "name": "Sarah Bowling",
      "age": 43
    },
    {
      "id": 103,
      "name": "Gautam Bhalla",
      "age": 33
    }
  ]

  all(): Observable<Array<object>> {
    return of(this.users);
  }

  constructor() { }
}
