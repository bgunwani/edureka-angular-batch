import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('username')) {
      return true;
    }
    this._router.navigate(['']);
    return false;
  }

}
