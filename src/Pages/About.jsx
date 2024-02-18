import React from 'react'
import MyNavbar from '../Components/MyNavbar';
import AboutHeader from './AboutHeader';
import Vision from './Vision';
import Mission from './Mission';
import Props from './Props';
import Values from './Values';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <div>
            <MyNavbar/>
            <AboutHeader/>
            <Vision/>
            <Mission/>
            <Props/>
            <Values/>
            <Footer/>
        </div>
    )
}

export default About
