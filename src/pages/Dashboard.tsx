import React from "react";
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Card} from 'antd'
import HalfFullWidth from "../components/HalfFullWidth";

import './index.css'

export default function Dashboard() {
    return (
        <div className="dashboard-content">
            <Card style={{ width: 300 }}>
                <Link to='/half-full-width'>
                    HalfFullWidth
                </Link>
            </Card>
            <Switch>
                <Route exact path='/half-full-width'>
                    <HalfFullWidth/>
                </Route>
            </Switch>
        </div>

    );
}