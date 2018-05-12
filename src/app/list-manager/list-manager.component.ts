import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',

  template: `
    <div class="todo-app">
      <h1>
        {{ title }}
      </h1>

      <todo-input (submit)="addItem($event)"></todo-input>

      <ul>
        <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  constructor(private todoListService:TodoListService) { }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  title = 'To Do List in Angular 5!';

  todoList;

  addItem(title): void {
    this.todoListService.addItem({ title });
  }


}
