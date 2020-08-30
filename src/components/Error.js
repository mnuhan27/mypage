import React from 'react';
import Header from './Header'
import ErrorContent from './ErrorContent'
import Footer from './Footer'





export default class Error extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                 <Header/>
                <ErrorContent />
                <Footer />
            </div>

        )
    }




}