import {api} from "./api/mockApi";

export function useTodoServers() {
    const loadTodos = () => {
        return api.get("/todos")
            .then(response => response.data)
    }

    const deleteTodoId = id => {
        return api.delete(`todos/${id}`);
    };

    const updateTodoDone = todo => api.put(`todos/${todo.id}`, {
        id: todo.id,
        text: todo.text,
        done: todo.done
    })
        .then(res => res.data);

    const createTodo = inputValue => api.post("todos", {text: inputValue.trim(), done: false})
        .then(res => res.data);

    return {loadTodos, deleteTodoId, updateTodoDone, createTodo};
}