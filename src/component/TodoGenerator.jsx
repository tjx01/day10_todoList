import React, {useContext, useState} from "react";
import {TodoContext} from "../context/TodoContext";

export function TodoGenerator() {
    const [inputValue, setInputValue] = useState("");
    const {state, dispatch} = useContext(TodoContext)

    function addItem() {
        if (inputValue.trim() === "") {
            alert("Input cannot be empty");
            return;
        }
        dispatch({
            type: "ADD_TODO",
            payload: { text: inputValue }
        });
        setInputValue("");
    }


    return (
        <div>
            <input
                className={"todo-item"}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
        </div>
    );
}
