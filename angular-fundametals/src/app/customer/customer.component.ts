import { Component } from '@angular/core';
import { Customer } from '../models/customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  message: string = "Customer Management System!!";

  custObj: any = {
    CustomerCode: 1001,
    CustomerName: "King Kochhar",
    CustomerAmount: 20000
  }

  customerObj: Customer = new Customer();

  userObj: any = {
    username: '',
    password: ''
  }

  login(): void {
    if (this.userObj.username == "admin"
      && this.userObj.password == "123456") {
      alert("You are logged In.");
    } else {
      alert("Invalid Credentials");
    }
  }


}
