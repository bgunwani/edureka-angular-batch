import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrNotificationsComponent } from './toastr-notifications.component';

describe('ToastrNotificationsComponent', () => {
  let component: ToastrNotificationsComponent;
  let fixture: ComponentFixture<ToastrNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastrNotificationsComponent]
    });
    fixture = TestBed.createComponent(ToastrNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
