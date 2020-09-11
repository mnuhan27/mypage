import React from 'react';
import Header from './Header'
import AboutContent from './AboutContent'
import Footer from './Footer'



export default class About extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                 <Header  />
                 <AboutContent />
                <Footer />
            </div>

        )
    }

}

