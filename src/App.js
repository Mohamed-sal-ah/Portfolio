import React from 'react';
import HomePage from './components/Home'
import AboutPage from './components/About'
import ApplicationPage from './components/Application'
import ContactPage from './components/Contact'
import { Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './App.scss'
const App = () => (
  <Route
    render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={3000}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path='/' component={() => (<HomePage />)} />
            <Route path='/about' component={() => (<AboutPage />)} />
            <Route path='/contact' component={() => (<ContactPage />)} />
            <Route path='/projects' component={() => (<ApplicationPage />)} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
)

export default App;
