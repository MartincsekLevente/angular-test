export interface Todo {
    userId: number;
    completed: boolean;
    todo: string;
    id: number;
}

export interface Todos {
    todos: Array<Todo>;
    total: number;
    skip: number;
    limit: number;
}
