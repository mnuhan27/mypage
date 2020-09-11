import React from 'react';
import Typing from "react-typing-animation";

export default class ProjectsContent extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="content">
                <Typing delay={500}>
                <div className = "aboutcontenttitle">Here are some <span className="contenttitleone"><strong>cool things</strong></span> I made.</div>
                </Typing>
                <div className = "contentitem"></div>
                <div className = "contentitem"></div>
            </div>

        )
    }




}