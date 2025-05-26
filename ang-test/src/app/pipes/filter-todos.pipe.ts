import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
    name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

    transform(todos: Todo[], searchQuery: string): Todo[] {
        if (!searchQuery) return todos;
        const text = searchQuery.toLowerCase();
        todos.filter((todo) => {
            return todo.todo.toLowerCase().includes(text);
        });

        return todos;
    }

}
