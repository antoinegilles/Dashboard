import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import PersonList from './PersonList';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
ReactDOM.render(<PersonList />, document.getElementById('data'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
