import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoGroup} from "./component/TodoGroup";
import {TodoContext} from "./context/TodoContext";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoGroup/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;