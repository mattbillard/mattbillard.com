import React, { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom'

import './App.css';

import AboutPage from '../../pages/AboutPage';
import ConnectPage from '../../pages/ConnectPage';
import HomePage from '../../pages/HomePage';
import SkillsPage from '../../pages/SkillsPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <Link to='/about'>about </Link> 
        <Link to='/connect'>connect </Link> 
        <Link to='/home'>home </Link> 
        <Link to='/skills'>skills </Link> 

        <Switch>
          <Route path='/about' component={AboutPage}/>
          <Route path='/connect' component={ConnectPage}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/skills' component={SkillsPage}/>
          <Redirect from="/*" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
