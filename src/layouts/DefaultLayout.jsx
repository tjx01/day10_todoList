import {NavLink, Outlet} from "react-router";
import { Layout, Menu} from 'antd';
import {useState} from "react";

const { Header, Footer, Sider, Content } = Layout;

export function DefaultLayout() {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            key: 'home',
            label: <NavLink to={"/"}>Home</NavLink>
        },
        {
            key: 'todos',
            label: <NavLink to={"/todos/done"}>Todos Done</NavLink>
        },
        {
            key: 'about',
            label: <NavLink to={"/about"}>About</NavLink>
        },
    ]

    return <Layout>
        <Header>
            <Menu onClick={onClick}
                  selectedKeys={[current]}
                  theme="dark"
                  mode="horizontal" items={items} />
        </Header>
        <Content>
            <Outlet/>
        </Content>
        <Footer>
            @Copyright
        </Footer>
    </Layout>
}