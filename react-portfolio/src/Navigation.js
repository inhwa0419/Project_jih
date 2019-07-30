import React, { Component } from 'react';
import './Navigation.css';


class Navigation extends Component {
    render(){
        
        const sections = ['Home', 'About', 'Skills', 'Project', 'Contact'];
        const navLinks = sections.map(section => {
            return(
                <li onClick ={() => {
                    document.getElementById(section).scrollIntoView();
                 }}>
                  {section}
                 </li>
            )
        });
        return (
            <nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
            <div class="container" id = "Navigation">
                <a class="navbar-brand" href="index.html">INHWA Portfolio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                       {navLinks}
                    </ul>
                </div>
            </div>
            <div>
           
                
            </div>
        </nav>
      
        );

    }

}

export default Navigation;
