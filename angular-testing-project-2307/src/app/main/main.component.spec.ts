import { RouterTestingModule } from '@angular/router/testing';

import { MainComponent } from './main.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainComponent],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('Should Create the Main Component', () => {
    expect(component).toBeTruthy();
  })

  it('Render the Welcome Message', () => {
    expect(component.message).toEqual('Hello World!!');
  })

})


// describe('MainComponent', () => {
//   let component: MainComponent;
//   let fixture: ComponentFixture<MainComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [MainComponent]
//     });
//     fixture = TestBed.createComponent(MainComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
