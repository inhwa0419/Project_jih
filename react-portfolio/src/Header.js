import React, { Component } from 'react';
import Background from './img/bg.jpg';
import './Header.css';


const mystyles = {
    backgroundImage: `url( ${Background} )`,
    height: '90vh',
    backgroundSize: 'cover'
}

class Header extends Component {

    render(){
        return(
            <div className="Header" id="Home">
            <header style = {mystyles}> 
                <h1>{this.props.title}</h1>
                <p>WELCOME TO MY PORTFOLIO SITE <span></span></p>
                <a href="#button">{this.props.button}</a>
            </header>
            </div>
        );
    }
};

export default Header;