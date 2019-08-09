import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/Nav';
import Hero from './components/Hero'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import dotenv from 'dotenv'
// import errorReporter from './errorReporter'

// dotenv.config()
// errorReporter.client.report(new Error('faq example'))

const Index = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/hero/:id" component={Hero} />
        </Switch>
      </Router>
    </div>
  )
}



ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
