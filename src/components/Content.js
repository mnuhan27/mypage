import React from 'react';
import Sketch from './Sketch';
import Typing from 'react-typing-animation';


export default class Content extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="content">
                <Typing delay={500}>
                <div className = "aboutcontenttitle">Hi! my name is <span className = "contentname">Nuhan</span></div>
                </Typing>
                <div className="homecontent">
                <div className = "homecontentitemone">I'm currently researching in Psychology and Statistics at <span className="columbia">Columbia University</span></div>
                <div className = "homecontentitemtwo">I am also a <strong>Web Developer </strong>using tools such as React</div>
                <div className="sketch">
                <Sketch />
                </div>
                </div>
                
            </div>

        )
    }




}