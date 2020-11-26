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

import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import styled from 'styled-components'

const AllPagesDiv = styled.div`
height:fit-content;
position:relative;
`

const App = () => (
  <Route
    render={({ location }) => (
      <AllPagesDiv>
        <Navbar />
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
        <Footer />
      </AllPagesDiv>
    )} />
)

export default App;
