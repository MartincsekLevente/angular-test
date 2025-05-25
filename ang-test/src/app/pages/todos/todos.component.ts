import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoItemComponent } from '../../components/todos/todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { Todo } from '../../model/todo.type';
import { catchError, Subscription } from 'rxjs';

@Component({
    selector: 'app-todos',
    imports: [
        TodoItemComponent,
        NgFor
    ],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit, OnDestroy {
    todosService = inject(TodosService);
    todoItemsSubscription!: Subscription;
    todoItems = signal<Array<Todo>>([]);

    ngOnInit() {
        this.todoItemsSubscription = this.todosService
            .getTodos()
            .pipe(
                catchError((err) => {
                    console.log(err);
                    throw err;
                })
            )
            .subscribe((todos) => {
                console.log(todos);
                this.todoItems.set(todos.todos);
            });
    }

    ngOnDestroy() {
        this.todoItemsSubscription.unsubscribe();
    }
}
