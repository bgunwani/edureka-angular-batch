import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: any = [];
  user = {
    username: '', password: ''
  };
  constructor(private _authenticationService: AuthenticationService) { }


  login() {
    this._authenticationService.login(this.user.username, this.user.password);
  }

}
