import React, { Component } from 'react';
import './Skills.css'


class Skills extends Component {
    render(){
        return(
            <div className="skills" id = "Skills">
                <h2>Skills</h2>
                <h3>Language / FrameWork</h3>
                <div className="row">
                    <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} />
                    <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} />
                    <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} />
                    <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} />
                    <Icons myIcon={iconObj[4].icon} myTitle={iconObj[4].title} />
                    <Icons myIcon={iconObj[5].icon} myTitle={iconObj[5].title} />
                    <Icons myIcon={iconObj[6].icon} myTitle={iconObj[6].title} />
                </div>
            </div>
            


        );
    }
}
const iconObj = [
    {
        icon: <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" />,
        title: 'C++',
    },
    {
        icon: <img src="https://img.icons8.com/color/96/000000/python.png" />,
        title: 'Python',

    },
    {
        icon: <img src="https://img.icons8.com/color/96/000000/javascript.png" />,
        title: 'JavaScript',

    },
    {
        icon: <img src="https://img.icons8.com/color/96/000000/react-native.png" />,
        title: 'React',

    },
    {
        icon: <img src="https://img.icons8.com/color/96/000000/nodejs.png" />,
        title: 'Node.js',

    },
    {
        icon: <img src="https://img.icons8.com/color/96/000000/html-5.png" />,
        title: 'HTML'

    },
    {
        icon: <img src="https://img.icons8.com/color/96/000000/css3.png" />,
        title: 'CSS'

    }


];


class Icons extends Component {
    render(){
        return(
            <div>
            <span>
                {this.props.myIcon}
            </span>
            <h4>{this.props.myTitle}</h4>
            </div>

        );
    }


}
export default Skills;
