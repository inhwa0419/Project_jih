import React, { Component } from 'react';
import './About.css';
import image from './img/portfolio-4.jpg';
import write from './img/image.png';



class About extends Component {

    render(){
        return(
            <div className="About" id = "About">
                <div class="row">
                <div class="col-xs-12 header"> 
                <h1>{this.props.title}</h1>
                </div>
                 </div>
                <div class="row">
                <div class="col-xs-4 menu"> 
                <img id="image"src={image}/>
                </div>
                 <div class="col-xs-4 content">  
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
                 {/*
                 <div class="col-xs-4 content">  
                    <dl>
                        <img src="https://img.icons8.com/ios-filled/50/000000/education.png" />
                        <dt>Education</dt>
                        <dd>
                            2019.02 <br /> 경희대학교 졸업 <br /> 컴퓨터공학과 전공
                        </dd>
                    </dl>
                 </div>
                 */}
                 </div>
                 </div>
          
     
        );
    }
};

export default About;