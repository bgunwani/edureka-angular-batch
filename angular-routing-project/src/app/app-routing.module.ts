import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SupportComponent } from './support/support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'support', component: SupportComponent, children: [
      { path: '', component: CustomerSupportComponent },
      { path: 'customer-support', component: CustomerSupportComponent },
      { path: 'employee-support', component: EmployeeSupportComponent }
    ]
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
