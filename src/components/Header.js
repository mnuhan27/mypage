import React from 'react';
import {Link} from "react-router-dom"


var isAboutStyle = {
    color: ''
}



export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
        this.changeTextColorEnter = this.changeTextColorEnter.bind(this)
        this.changeTextColorLeave = this.changeTextColorLeave.bind(this)
       

    }

    changeTextColorEnter(e){
        e.target.style.color = '#D1C6AD';

    }

    changeTextColorLeave(e){
        e.target.style.color = 'black';

    }






    render(){
        
      

        return(
            <div className="header">
                <Link to="/"
                style={{ textDecoration: 'none' }}
                >
                <div className = "headerlogo">Nuhan Ahnaf</div>
                </Link>

                <Link to="/projects" style={{ textDecoration: 'none' }} >
                <div className = "headeritem"
                onMouseEnter={this.changeTextColorEnter}
                onMouseLeave= {this.changeTextColorLeave}>Projects</div>
                </Link>

                <Link to="/aboutme"
                style={{ textDecoration: 'none' }} >
                <div className = "headeritem"
                onMouseEnter={this.changeTextColorEnter}
                onMouseLeave= {this.changeTextColorLeave}

                >About</div>
                </Link>


                <div 
                className ="headeritem"  
                onClick={()=> window.open("https://www.linkedin.com/in/muhammadnuhanahnaf", "_blank")}
                onMouseEnter={this.changeTextColorEnter}
                onMouseLeave= {this.changeTextColorLeave}
                >LinkedIn</div>
            </div>

        )
    }




}