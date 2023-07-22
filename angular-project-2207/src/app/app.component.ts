import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn!: boolean;

  constructor(private _authenticationService: AuthenticationService) {
    this.isLoggedIn = this._authenticationService.loggedIn();
    console.log(this.isLoggedIn);
  }

  ngOnInit() { }

  logout() {
    this._authenticationService.logout();
  }
}
