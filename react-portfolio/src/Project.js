import React, { Component } from 'react';
import './Project.css';
import image1 from './img/traffic.jpg';
import image2 from './img/todolist.png';
import image3 from './img/movie.jpg';


class Project extends Component {
    render(){
        return(
            <div class="portfolio-container section-container">
                <div class="container">
                    <div class="row">
                        <div class="col portfolio section-description wow fadeIn">
                            <h2>Project</h2>
                            <div class="divider-1 wow fadeInUp"><span></span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 portfolio-box wow fadeInUp">
                            <div class="portfolio-box-image">
                                <img src={image1} alt="" data-at2x={image1}/>
                            </div>
                            <h3><a href="#">MQTT client App</a> <i class="fas fa-angle-right"></i></h3>
                            <div class="portfolio-box-date"><i class="far fa-calendar"></i> October 2018</div>
                            <p>MQTT, Flutter, Androidstudio, Mosquitto</p>
                        </div>
                        <div class="col-md-4 portfolio-box wow fadeInDown">
                            <div class="portfolio-box-image">
                                <img src={image2} alt="" data-at2x={image2}/>
                            </div>
                            <h3><a href="#">Todo list</a> <i class="fas fa-angle-right"></i></h3>
                            <div class="portfolio-box-date"><i class="far fa-calendar"></i> February 2018</div>
                            <p>Androidstudio, Flutter, SQLite</p>
                        </div>
                        <div class="col-md-4 portfolio-box wow fadeInUp">
                            <div class="portfolio-box-image">
                                <img src={image3} alt="" data-at2x={image3}/>
                            </div>
                            <h3><a href="#">Moive app</a> <i class="fas fa-angle-right"></i></h3>
                            <div class="portfolio-box-date"><i class="far fa-calendar"></i> July 2019</div>
                            <p>React, JavaScript</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col section-bottom-button wow fadeInUp">
                        <button type="button" class = "btn btn-primary">Load more</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;