import {TodoContext} from "../contexts/TodoContext";
import React, {useContext, useState} from "react";
import './TodoItem.css';
import {useTodoServers} from "../useTodoServers";
import {EditOutlined} from "@ant-design/icons";
import {Input, Modal} from 'antd';

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const {updateTodoDone} = useTodoServers();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editValue, setEditValue] = useState(props.todo.text);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        const newText = editValue.trim();
        if (newText && newText !== props.todo.text) {
            const newTodo = {id: props.todo.id, text: newText, done: props.todo.done};
            updateTodoDone(newTodo)
                .then(todo => {
                    dispatch({
                        type: "UPDATE_TODO",
                        payload: todo
                    })
                })
        }
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function toggleTodo() {
        const newTodo = {...props.todo, done: !props.todo.done};
        updateTodoDone(newTodo)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                })
            })
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={toggleTodo}
        >
            {props.todo.text}
        </span>
        <EditOutlined className={"editIcon"} onClick={showModal}/>
        <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Input placeholder="输入待办" className={"todo-input"} value={editValue}  onChange={e => setEditValue(e.target.value)} onPressEnter={handleOk} />
        </Modal>
    </div>
}