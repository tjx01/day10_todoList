import React, {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoGenerator.css';
import {api} from "../api/mockApi";

export function TodoGenerator() {
    const [inputValue, setInputValue] = useState("");
    const {dispatch} = useContext(TodoContext)

    function addItem() {
        if (inputValue.trim() === "") {
            alert("输入不能为空");
            return;
        }
        api.post("todos", {text: inputValue.trim(), done: false})
            .then(res => res.data)
            .then(todo => {
                dispatch({
                    type: "ADD_TODO",
                    payload: todo
                });
            })
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
