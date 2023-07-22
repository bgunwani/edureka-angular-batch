import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrPopupComponent } from './toastr-popup.component';

describe('ToastrPopupComponent', () => {
  let component: ToastrPopupComponent;
  let fixture: ComponentFixture<ToastrPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastrPopupComponent]
    });
    fixture = TestBed.createComponent(ToastrPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
