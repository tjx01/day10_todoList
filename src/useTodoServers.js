import {api} from "./api/mockApi";

export function useTodoServers() {
    const loadTodos = () => {
        return api.get("/todos")
            .then(response => response.data)
    }

    const deleteTodoId = id => {
        const promise = api.delete(`todos/${id}`);
        return promise;
    };

    const updateTodoDone = props => api.put(`todos/${props.todo.id}`, {
        id: props.todo.id,
        text: props.todo.text,
        done: !props.todo.done
    })
        .then(res => res.data);

    const createTodo = inputValue => api.post("todos", {text: inputValue.trim(), done: false})
        .then(res => res.data);

    return {loadTodos, deleteTodoId, updateTodoDone, createTodo};
}