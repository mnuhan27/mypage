import React from 'react';
import Header from './Header'
import ProjectsContent from './ProjectsContent'
import Footer from './Footer'



export default class Projects extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                <Header/>
                <ProjectsContent />
                <Footer />
            </div>

        )
    }



}