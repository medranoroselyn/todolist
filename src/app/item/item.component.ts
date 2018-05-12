import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">

      <input type="checkbox"
             class="todo-checkbox"
             (click)="completeItem()">

      <span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
        {{ todoItem.title }}
      </span>

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>

    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  isComplete: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
