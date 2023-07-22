import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ToastrPopupComponent } from './toastr-popup/toastr-popup.component';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'toastr-popup', component: ToastrPopupComponent },
  { path: 'toastr-notifications', component: ToastrNotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
