import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoItemComponent } from '../../components/todos/todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { Todo } from '../../model/todo.type';
import { catchError, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

@Component({
    selector: 'app-todos',
    imports: [
        TodoItemComponent,
        FormsModule,
        FilterTodosPipe
    ],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit, OnDestroy {
    todosService = inject(TodosService);
    todoItemsSubscription!: Subscription;
    todoItems = signal<Array<Todo>>([]);
    searchQuery = signal("");

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
                this.todoItems.set(todos.todos);
            });
    }

    ngOnDestroy() {
        this.todoItemsSubscription.unsubscribe();
    }

    handleTodoClicked(todoItem: Todo) {
        this.todoItems.update((todos) => {
            return todos.map((todo) => {
                if (todo.id === todoItem.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        })
    }
}
