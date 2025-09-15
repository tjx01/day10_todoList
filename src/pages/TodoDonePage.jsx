import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDonePage() {
    const {state} = useContext(TodoContext)

    return <div>
        {
            state.filter(item => item.done).map((item, index) => (
                <div className={"todo-group"} key={index}>
                    <TodoItem todo={item} key={index} index={index}/>
                </div>
            ))

        }
    </div>
}