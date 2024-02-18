import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png" ;
import left from "../images/left.png"
import right from "../images/right.png" ;
const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="navLinks">
        <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="logo" width={120}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links">
                <img src={left} alt="" width={50} />
                <NavLink to="/" className="mainLink">الرئيسية</NavLink>
                <NavLink to="/about">عن اكاديمية النورس</NavLink>
                <NavLink to="link">برامجنا</NavLink>
                <NavLink to="link">خدماتنا</NavLink>
                <NavLink to="link">شهادات احترافية</NavLink>
                <NavLink to="link">استشارة مجانية</NavLink>
                <NavLink to="link">التسجيل</NavLink>
                <NavLink to="link">اتصل بنا</NavLink>
                <img src={right} alt="" width={50} />
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default MyNavbar;
