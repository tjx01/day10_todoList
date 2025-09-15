import {NavLink, Outlet} from "react-router";
import "./DefaultLayout.css"

export function DefaultLayout() {
    return <div className={"app-container"}>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/todos/done"}>todo done</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>TODO list</h1>
            <Outlet/>
        </main>
    </div>;
}