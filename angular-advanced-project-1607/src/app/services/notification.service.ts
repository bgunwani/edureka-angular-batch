import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toastr: ToastrService) { }

  showToastrSuccess(message: string, title: string) {
    this._toastr.success(message, title);
  }

  showToastrError(message: string, title: string) {
    this._toastr.error(message, title);
  }

  showToastrWarning(message: string, title: string) {
    this._toastr.warning(message, title);
  }

  showToastrInfo(message: string, title: string) {
    this._toastr.info(message, title);
  }
}
