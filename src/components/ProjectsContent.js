import React from 'react';

export default class ProjectsContent extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="content">
                <div className = "aboutcontenttitle">Here are some <span className="contenttitleone"><strong>cool things</strong></span> I made.</div>
                <div className = "contentitem"></div>
                <div className = "contentitem"></div>
            </div>

        )
    }




}