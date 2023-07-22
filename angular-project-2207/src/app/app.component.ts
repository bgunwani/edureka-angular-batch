import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _authenticationService: AuthenticationService) { }

  logout() {
    this._authenticationService.logout();
  }

  title = 'angular-project-2207';
}
