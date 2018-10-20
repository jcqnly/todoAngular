import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      MORE {{ title }}!
    </h1>
    
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ways to be death metal!!!';
  todoList = [
    {title: 'dye hair black'},
    {title: 'practice air guitar'},
    {title: 'find the static void'},
    {title: 'bathe in goat blood'},
  ];
  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
