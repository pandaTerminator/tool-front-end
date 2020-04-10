import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Layout, Menu, Dropdown} from "antd"
import './index.css'
import HalfFullWidth from "../components/HalfFullWidth";

export default function BasicRouter() {


    const [currentUrl, setCurrentUrl] = useState('dashboard')


    function handleClick (e) {
        setCurrentUrl(e.key)
    };
    const {Header, Content} = Layout;
    const menu = (
        <Menu className="main-menu" selectedKeys={[currentUrl]} onClick={handleClick}>
            <Menu.Item key="dashboard">
                <Link to='/'>
                    Half Full width
                </Link>
            </Menu.Item>
        </Menu>
    )
    return (
        <Router>
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <Dropdown overlay={menu} className="main-drop-down">
                        <a href="/" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Main function
                        </a>
                    </Dropdown>
                </Header>
                <Content style={{height: '95%'}}>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/">
                            <HalfFullWidth/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Router>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
