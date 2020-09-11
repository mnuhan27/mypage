import React from 'react';
import profile from "./profile.jpg";
import Typing from "react-typing-animation";

export default class AboutContent extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="aboutcontent">
                <Typing delay={500}>
                <div className = "aboutcontenttitle"><span className="contenttitleone">Developer. </span><span className="contenttitletwo">Scientist. </span>Instructor</div>
                </Typing>
                <div className ="aboutcontentcontainer">
                <div className = "aboutcontentpara">I am fourth year student at Emory University in Atlanta,GA double majoring in Biology and Arabic.</div>
                {/*<img className="aboutcontentimage" src={profile} alt="Profile"/>*/}
                </div>
            </div>

        )
    }




}