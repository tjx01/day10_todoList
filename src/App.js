import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";

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

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage />
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