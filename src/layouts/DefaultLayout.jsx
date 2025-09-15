import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return <div>
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
            <Outlet/>
        </main>
    </div>;
}