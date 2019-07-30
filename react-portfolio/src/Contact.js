import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
    render(){
        return(
            <div className="Contact" id = "Contact">
            <footer>
            <section id="footer">
            <h3 class="tit">Contact</h3>

            <em></em>
            <img src="https://img.icons8.com/color/48/000000/android.png"></img>
            <span class="contact">010 - 7677 - 8411
            <br/>
            <img src="https://img.icons8.com/color/48/000000/gmail.png"></img>
            junginhwa419@naver.com 
            <br/> 
            <a href="https://github.com/inhwa0419" >
            <img src="https://img.icons8.com/material-sharp/96/000000/github.png" /> </a>
            https://github.com/inhwa0419
            
           </span>
            <p>COPYRIGHT ⓒ 2019 by JUNG IN HWA. all rights reserved.</p>
            </section>
          </footer>
         </div>
        );
    }
}
            

export default Contact;