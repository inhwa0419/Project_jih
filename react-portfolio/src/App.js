import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Project from './Project';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Route exact path="/" component={index.js}/> 
      <Route path="/about" component={About}/>
      <Route path="/project" component={Project}/>
      <Route path="/contact" component={Contact}/>
      </header>
    </div>
  );
}

export default App;
