import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import './TodoDetailPage.css';

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.filter(item => item.id === id);
    if (todo.length === 0) {
        return <div>Not Found Todo</div>;
    }
    return <div className={"todo-detail-page"}>
        <h1>Todo List</h1>
        <TodoItem todo={todo[0]} index={id}/>
    </div>
}