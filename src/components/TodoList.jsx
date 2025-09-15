import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoList() {
    const { state } = useContext(TodoContext)
    return <div>
        {state && state.length > 0 ? (
            <TodoGroup/>
        ): (
            <div>Add the things you need to do today...</div>
        )}

        <TodoGenerator/>
    </div>
}