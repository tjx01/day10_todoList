import React, {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoGenerator.css';

export function TodoGenerator() {
    const [inputValue, setInputValue] = useState("");
    const {state, dispatch} = useContext(TodoContext)

    function addItem() {
        if (inputValue.trim() === "") {
            alert("输入不能为空");
            return;
        }
        dispatch({
            type: "ADD_TODO",
            payload: { text: inputValue }
        });
        setInputValue("");
    }


    return (
        <div className={"generator"}>
            <input
                className={"todo-item"}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={addItem} className={"addButton"}>Add</button>
        </div>
    );
}
