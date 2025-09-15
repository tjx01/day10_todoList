import React, {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoGenerator.css';
import {useTodoServers} from "../useTodoServers";
import { Button, Input} from 'antd';

export function TodoGenerator() {
    const [inputValue, setInputValue] = useState("");
    const {createTodo} = useTodoServers()
    const {dispatch} = useContext(TodoContext)

    function addItem() {
        if (inputValue.trim() === "") {
            alert("输入不能为空");
            return;
        }
        createTodo(inputValue)
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
            <Input placeholder="输入待办" className={"todo-input"} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <Button type="primary" onClick={addItem} className={"addButton"}>Add</Button>
        </div>
    );
}
