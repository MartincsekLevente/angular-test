import { Component, input, output } from '@angular/core';
import { Todo } from '../../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../../directives/highlight-completed-todo.directive';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-todo-item',
    imports: [HighlightCompletedTodoDirective, TitleCasePipe],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
    todoDetails = input.required<Todo>();
    todoToggled = output<Todo>();

    todoClicked() {
        this.todoToggled.emit(this.todoDetails());
    }


}
