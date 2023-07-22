import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: any = [];

  constructor(private _http: HttpClient, private _router: Router, private _toastr: ToastrService) {
    this._http.get(`http://localhost:3000/users`).subscribe((result) => {
      this.users = result;
      console.log(this.users);
    }, (error) => {
      console.log(error);
    })
  }

  login(username: string, password: string) {
    for (var usr of this.users) {
      if (usr['username'] == username && usr['password'] == password) {
        localStorage.setItem("username", username);
        this._router.navigate(['']);
        return true;
      } else {
        return false;
      }
    }
    return;
  }

  logout(): void {
    // localStorage.clear();
    localStorage.removeItem("username");
    this._toastr.info('You are successfully loggedOut.');
    this._router.navigate(['']);
  }

  loggedIn(): boolean {
    return (localStorage.getItem('username') != null);
  }

}
