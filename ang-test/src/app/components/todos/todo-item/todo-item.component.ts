import { Component, input } from '@angular/core';
import { Todo } from '../../../model/todo.type';

@Component({
    selector: 'app-todo-item',
    imports: [],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
    todoDetails = input.required<Todo>();


}
