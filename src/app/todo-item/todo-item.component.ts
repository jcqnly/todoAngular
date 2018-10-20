import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
    {{ item.title }}
​
    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
`,
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  constructor() { 
  }
  removeItem() {
    this.remove.emit(this.item);
  }
  ngOnInit() {
    console.log(this.item);
  }

}
