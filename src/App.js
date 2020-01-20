import React from 'react';
import './components/style/style.scss'
import Navbar from './components/Navbar.jsx'
import Home from './Home.js'
import Footer from './components/Footer'
import About from './About'
import Applications from './Applications'
import Contact from './Contact'



//import {Router,Route,Switch} from 'react-router-dom'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'



function App() {
  
  return (
    <Router>
       <Navbar></Navbar>
       <Switch>
         <Route path='/' exact component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/applications' component={Applications}/>
       </Switch>
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
