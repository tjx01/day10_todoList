import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";
import './TodoGroup.css';
import {useNavigate} from "react-router";
import {api} from "../api/mockApi";

function deleteTodoId(id) {
    const promise = api.delete(`todos/${id}`);
    return promise;
}

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();

    function deleteItem(id, done) {
        if (!done) {
            alert("事件未完成，不能删除");
            return;
        }
        deleteTodoId(id)
            .then(() => {
                alert("删除成功");
                dispatch({ type: "DELETE_TODO", payload: { id } });
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
                    <button className={"deleteBtn"} onClick={() => deleteItem(item.id, item.done)}>X</button>
                    <button className={"detailsBtn"} onClick={()=>enterDetails(item.id)}>details</button>
                </div>
            })
        }
    </div>
}