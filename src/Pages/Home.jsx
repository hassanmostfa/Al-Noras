import React from 'react' ;
import Feedback from './Feedback';
import Partner from './Partner';
import Services from './Services';
import MySwiper from './MySwiper';
import Header from './Header';
import Footer from "../Components/Footer"
import MyNavbar from '../Components/MyNavbar';

const Home = () => {
    return (
        <div>
        <MyNavbar/>
        <Header/>
        <Services/>
        <Feedback/>
        <MySwiper/>
        <Partner/>
        <Footer/>
        </div>
    )
}

export default Home
