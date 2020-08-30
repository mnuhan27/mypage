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
                <div className = "contentitem">Hi! my name is <span className = "contentname">Oops! Looks like you got lost.</span></div>
                <div className = "contentitem"></div>
                <div className = "contentitem"></div>
            </div>

        )
    }




}