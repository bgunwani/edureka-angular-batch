import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { MainComponent } from './main/main.component';
import { CustomerComponent } from './customer/customer.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    MainComponent,
    CustomerComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
