import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
​    <input type="checkbox"
           class="todo-checkbox"
           (click)="completeItem()"/>
    <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
      {{ item.title }}
    </span>
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
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { 
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  ngOnInit() {
    console.log(this.item);
  }

  completeItem() {
    this.item.completed = !this.item.completed
    // this.update.emit({
    //   item: this.item,
    //   changes: {completed: !this.item.completed},
    // });

    console.log(this.item.completed);
  }
}
