import { Component, EventEmitter, Input, Output }
  from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  PData!: string;

  @Output()
  childEvent = new EventEmitter();

  onChange(value: any) {
    this.childEvent.emit(value);
  }

}
