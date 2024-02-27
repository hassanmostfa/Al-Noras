import React from 'react'
import left from "../images/left.png";
import right from "../images/right.png";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/Logo.png";
import Categories from '../Components/Categories';
import { Link , NavLink} from 'react-router-dom';


const Navbar3 = () => {
    return (
        <div>
        <div className="navbar1 navbar2 col row justify-content-around py-3 px-5 mt-4">
        <div className="links col-sm-6 d-flex justify-content-start gap-3">
            <Link className="styledLink">ابدا الان</Link>
            <img src={right} alt="" width={50} style={{ marginRight: "-36px" }}/>
            <div className="d-flex align-items-center justify-content-center gap-2">
                <NavLink to="/login" className="mx-2">الرئيسية</NavLink>
                <NavLink to="/about">مساعده</NavLink>
            </div>
            <img src={left} alt="" width={50} style={{ marginLeft: "-28px" }} />
        </div>
        <div className="links col-sm-6 d-flex justify-content-end gap-3">
        <input
            type="search"
            placeholder="بحث"
            className="courses-search-input"
        />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <Navbar.Brand href="/">
        <img src={Logo} alt="logo" width={120} />
        </Navbar.Brand>
        </div>
    </div>
        </div>
    )
}

export default Navbar3
