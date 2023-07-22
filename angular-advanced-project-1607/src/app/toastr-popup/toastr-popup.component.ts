import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-toastr-popup',
  templateUrl: './toastr-popup.component.html',
  styleUrls: ['./toastr-popup.component.css']
})
export class ToastrPopupComponent {

  constructor(private _toastr: ToastrService) { }

  ngOnInit() {
    // this._toastr.info('This is an information message.');
    // this._toastr.warning('This is a warning message.');
    // this._toastr.success('This is a success message.');
    // this._toastr.error('This is an error message.');

    // this._toastr.info('This is an information message.', 'edureka.co');
    // this._toastr.info('This is an information message.', 'edureka.co');
    // this._toastr.warning('This is a warning message.', 'edureka.co');
    // this._toastr.success('This is a success message.', 'edureka.co');
    // this._toastr.error('This is an error message.', 'edureka.co');

    this._toastr.error('There is an error.', 'edureka.co',
      { timeOut: 10000, closeButton: true, positionClass: 'toast-bottom-left' });
  }

}
