import React from 'react';

export default class Content extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="content">
                <div className = "homecontenttitle">Hi! my name is <span className = "contentname">Nuhan</span></div>
                <div className = "homecontentitemone">I'm currently researching in Psychology and Statistics at <span className="columbia">Columbia University</span></div>
                <div className = "homecontentitemtwo">I am also a <strong>Web Developer </strong>using tools such as React</div>
            </div>

        )
    }




}