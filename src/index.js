import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import PersonList from './PersonList';

//ReactDOM.render(<App />, document.getElementById('root'));
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/user" component={PersonList} />
        </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
