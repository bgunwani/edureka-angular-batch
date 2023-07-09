import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { WelcomePipe } from './pipes/welcome.pipe';
import { GreetingPipe } from './pipes/greeting.pipe';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    UsersComponent,
    WelcomePipe,
    GreetingPipe,
    ProductsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SortPipe],
  bootstrap: [MainComponent]
})
export class AppModule { }
