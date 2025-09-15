import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";
import './TodoGroup.css';
import {useNavigate} from "react-router";
import {useTodoServers} from "../useTodoServers";
import { Button} from 'antd';

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const {deleteTodoId} = useTodoServers();

    function deleteItem(id, done) {
        if (!done) {
            alert("事件未完成，不能删除");
            return;
        }
        deleteTodoId(id)
            .then(() => {
                alert("删除成功");
                dispatch({type: "DELETE_TODO", payload: {id}});
            })
    }

    function enterDetails(id) {
        navigate(`/todos/${id}`);
    }

    return <div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={index}>
                    <TodoItem todo={item} key={index} index={index}/>
                    <Button type="primary" danger onClick={() => deleteItem(item.id, item.done)}>X</Button>
                    <Button type="primary" onClick={() => enterDetails(item.id)}>details</Button>
                </div>
            })
        }
    </div>
}