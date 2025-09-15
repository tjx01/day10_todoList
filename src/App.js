import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./context/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";
import {TodoList} from "./component/TodoList";

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>;
}

function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error.status === 404
            ? <div>404 not found</div>
            : <div>{JSON.stringify(error)}</div>}
    </div>;
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <TodoList/>
            }
        ]
    }
])

export const initState = [];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <h1>TODO list</h1>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;