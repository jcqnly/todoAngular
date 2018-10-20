​import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    
  <input class="todo-input"
    #inputElementRef
    [value]="title"
    (keyup.enter)="submitValue($event.target.value)">
       
    <button (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,  
  styleUrls: ['./input-button-unit.component.scss']  
})    
export class InputButtonUnitComponent implements OnInit {
  title = 'Reign In Blood';
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { }                     
​
  ngOnInit() {
  }
  
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}