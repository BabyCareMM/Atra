import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../component/Login';
import CreateAccount from '../component/CreateAccount';
import PostHistory from '../component/PostHistory';
import Posts from '../component/Posts';
import LogOut from '../component/LogOut';

export default function RouterPage() {
    return (<>
        <Router >
            <LogOut/>
            <Switch>
                <Route exact path='/'><Login /></Route>
                <Route exact path='/login'><Login /></Route>
                <Route exact path='/createAccount'><CreateAccount /></Route>
                <Route exact path='/postHistory'><PostHistory /></Route>
                <Route exact path='/posts'><Posts /></Route>
            </Switch>
        </Router>
    </>)
}