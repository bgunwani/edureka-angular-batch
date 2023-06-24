
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { SupportComponent } from "./support/support.component";
import { NgModule } from "@angular/core";

const applicationRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'support', component: SupportComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(applicationRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}