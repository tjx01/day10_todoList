import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./context/TodoContext";
import {TodoList} from "./component/TodoList";

export const initState = [

];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <h1>TODO list</h1>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoList />
            </TodoContext.Provider>
        </div>
    );
}

export default App;