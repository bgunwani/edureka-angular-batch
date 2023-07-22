import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-toastr-notifications',
  templateUrl: './toastr-notifications.component.html',
  styleUrls: ['./toastr-notifications.component.css']
})
export class ToastrNotificationsComponent {

  constructor(private _notifications: NotificationService) { }

  showSuccess() {
    this._notifications.showToastrSuccess
      ('Employee Added Successfully.', "Success Message");
  }

  showError() {
    this._notifications.showToastrError
      ('Something went wrong.', "Error Message");
  }

  showInfo() {
    this._notifications.showToastrInfo
      ('This is an information.', "Information Message");
  }

  showWarning() {
    this._notifications.showToastrWarning
      ('This is a warning.', "Warning Message");
  }

}
