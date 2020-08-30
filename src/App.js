import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ErrorPage from './components/Error';
import "./App.css"


function App() {
  return (
<div className="app">
  <Switch>

  <Route path='/projects' component={Projects} />
  <Route path='/aboutme' component={About} />
  <Route path='/' component={Home} />
  <Route component={ErrorPage}/>
  </Switch>
</div>
    
  );
}

export default App;
