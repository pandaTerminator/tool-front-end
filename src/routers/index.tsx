import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import {Layout} from "antd";
export default function BasicRouter() {
    const { Header, Footer, Content } = Layout
    return (
        <Router>
                <Layout style={{ height: '100%'}}>
                    <Header>
                        <p>Half and full width auto switch</p>
                    </Header>
                    <Content style={{ height: '90%'}}>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
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
