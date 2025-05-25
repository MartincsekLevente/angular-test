import { inject, Injectable } from '@angular/core';
import { Todo, Todos } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    http = inject(HttpClient);

    getTodos() {
        const url = 'https://dummyjson.com/todos';
        return this.http.get<Todos>(url);
    }
}
