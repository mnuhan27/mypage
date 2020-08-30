import React from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'




export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                 <Header/>
                <Content />
                <Footer />
            </div>

        )
    }




}