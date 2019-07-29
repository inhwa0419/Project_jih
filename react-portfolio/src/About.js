import React, { Component } from 'react';
import './About.css';


class About extends Component {

    render(){
        return(
            <div className="About">
                <div>
                <h1>{this.props.title}</h1>
                <p class="tit_desc"></p>
                <div class="info">

                    <dl>
                    <img src="https://img.icons8.com/ios-filled/50/000000/name-tag-woman.png"/>
                        <dt>NAME</dt>
                        <dd> 정인화</dd>
                    </dl>
                    <dl>
                    <img src="https://img.icons8.com/ios-filled/50/000000/birthday.png" />
                        <dt>Birth-DAY</dt>
                        <dd>1996.04.19</dd>
                    </dl>
                    <dl>
                        <img src="https://img.icons8.com/ios-filled/50/000000/address.png"/>
                        <dt>ADDRESS</dt>
                        <dd>경기도 안양시</dd>
                    </dl>
                    <dl>
                         <img src="https://img.icons8.com/ios-filled/50/000000/cell-phone.png"/>
                        <dt>MOBILE</dt>
                        <dd>010 7677 8411</dd>
                    </dl>
                </div>
                </div>
               
            </div>
        );
    }
};

export default About;