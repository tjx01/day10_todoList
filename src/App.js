import './App.css';
import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {useTodoServers} from "./useTodoServers";
import '@ant-design/v5-patch-for-react-19';
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {loadTodos} = useTodoServers();
    unstableSetRender((node, container) => {
        container._reactRoot ||= createRoot(container);
        const root = container._reactRoot;
        root.render(node);
        return async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
            root.unmount();
        };
    });
    useEffect(() => {
        loadTodos()
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [dispatch])
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;