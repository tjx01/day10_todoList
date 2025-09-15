import {TodoGroup} from "../components/TodoGroup";
import {TodoGenerator} from "../components/TodoGenerator";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoListPage() {
    const { state } = useContext(TodoContext)
    return <div>
        <h1>Todo List</h1>
        {state && state.length > 0 ? (
            <TodoGroup/>
        ) : (
            <div>Add the things you need to do today...</div>
        )}

        <TodoGenerator/>
    </div>
}