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
import { HighlightDirective } from './directives/highlight.directives';
import { ToastrPopupComponent } from './toastr-popup/toastr-popup.component';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    UsersComponent,
    WelcomePipe,
    GreetingPipe,
    ProductsComponent,
    SortPipe,
    HighlightDirective,
    ToastrPopupComponent,
    ToastrNotificationsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
      closeButton: true,
      preventDuplicates: true
      // maxOpened: 1
    })
  ],
  providers: [SortPipe],
  bootstrap: [MainComponent]
})
export class AppModule { }
