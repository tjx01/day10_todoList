import './App.css';
import {useContext, useReducer} from "react";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {TodoItem} from "./components/TodoItem";

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

function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.filter(item => item.id === parseInt(id));
    if (todo.length === 0) {
        return <div>Not Found Todo</div>;
    }
    return <div>
        <TodoItem todo={todo[0]} index={id}/>
    </div>
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
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage />
            }
        ]
    }
])

export const initState = [
    {id: 1, text: "学习 React", done: false},
    {id: 2, text: "学习 Vue", done: true},
    {id: 3, text: "学习 Angular", done: false}
];

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