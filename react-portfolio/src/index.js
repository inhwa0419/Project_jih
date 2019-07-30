import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import About from './About';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { isObjectTypeIndexer } from '@babel/types';





class App extends Component {
    render(){
        return(
            
            <div>
                <Navigation logoTitle="INHWA Portfolio" />
                <Header title="INHWA Portfolio" button="Find Out More"/>
                <About title = "About Me"/>
                <Skills />
                <Project/>
                <Contact />
            </div>
        
        );
    }

}
ReactDOM.render(
<App />, 
document.getElementById('root'));

serviceWorker.unregister();
