import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from './components/create_user/CreateUser';
import PersonList from './components/dashboard/PersonList';
import Login from './components/login/Login';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={CreateUser} />
            <Route path="/user/:id" component={PersonList} />
            <Route path="/login" component={Login} />
        </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
