import React, { Component } from 'react';
import HomePage from './components/Home'
import Footer from './components/Footer'
import AboutPage from './components/About'
import ApplicationPage from './components/Application'
import ContactPage from './components/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light'
    }
  }
  componentDidMount() {
    //www.metaweather.com
    const API = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/906057'
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ weatherdata: data.consolidated_weather[0] }))
  }
  ThemeOnClick = (event) => {
    event.preventDefault();
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' })
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      this.setState({ theme: 'light' })
      document.documentElement.setAttribute('theme', 'light');
    }
  }
  render() {
    return (
      <>
        <Router>
          <Route exact path='/' component={() => (<HomePage pageTheme={this.state.theme} onForward={this.ThemeOnClick} />)} />
          <Route path='/about' component={() => (<AboutPage pageTheme={this.state.theme} onForward={this.ThemeOnClick} />)} />
          <Route path='/contact' component={() => (<ContactPage pageTheme={this.state.theme} onForward={this.ThemeOnClick} />)} />
          <Route path='/projects' component={() => (<ApplicationPage weatherdata={this.state.weatherdata} pageTheme={this.state.theme} onForward={this.ThemeOnClick} />)} />
          <Footer />
        </Router>
      </>
    )

  }
}

export default App;
