import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink , Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import left from "../images/left.png";
import right from "../images/right.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../Components/Footer";
import { useState } from "react";
import Categories from "../Components/Categories";
const Courses = () => {
    const [data, setData] = useState(Categories);
    const [activeButton, setActiveButton] = useState(null);    
        const filterResult = (categoryItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === categoryItem;
        });
        setData(result);
        setActiveButton(categoryItem); // Set the active button to the selected category
        };
    return (
        <div>
        {/* Navbar 1 */}
        <div className="navbar1 courses-nav-container col row justify-content-around py-3 px-5 mt-4">
            <div className="links col-sm-6 d-flex justify-content-start gap-3">
                <Link className="styledLink">انضم كمحاضر</Link>
                <Link className="styledLink">الخطة التدريبية</Link>
            </div>
            <div className="links col-sm-6 d-flex justify-content-end gap-3">
                <Link>الاستعلام عن الشهادات</Link>
                <span>/</span>
                <Link>تسجيل دخول</Link>
                <span>/</span>
                <Link>مستخدم جديد</Link>
            </div>
        </div>
        {/* Navbar 2 */}
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
        {/* Courses Header Section */}
        <div className="courses-header text-center mt-5 mb-3">
            <h1 className="my-3">الدورات التدريبية</h1>
            <div className="search-box my-3">
            <input type="search" placeholder="بحث" className="search-courses" />
            <i className="fa-solid fa-magnifying-glass search-courses-icon"></i>
            </div>
        </div>
        {/* Courses Filter Section */}
        <div className="courses-filter row justify-content-center my-5">
        <button
        onClick={() => {
            setData(Categories);
            setActiveButton(null); // Set the active button to null when "All" is clicked
            }}
            className={`courses-filter-btn ${activeButton === null ? 'active' : ''}`}
        >
            الكل
        </button>
        <button
            onClick={() => filterResult("برمجة")}
            className={`courses-filter-btn ${activeButton === "برمجة" ? 'active' : ''}`}
        >
            البرمجة
        </button>
        <button
            onClick={() => filterResult("تصميم")}
            className={`courses-filter-btn ${activeButton === "تصميم" ? 'active' : ''}`}
        >
            التصميم
        </button>
        <button
            onClick={() => filterResult("ادارة")}
            className={`courses-filter-btn ${activeButton === "ادارة" ? 'active' : ''}`}
        >
            الادارة
        </button>
        </div>
        {/* Courses Cards */}
            <div className="courses-cards row justify-content-center gap-5">
            {data.map((item) => (
                    <Card key={item.id} className="card" style={{ width: "18rem" , textAlign : "center" }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                        <Card.Title className="card-title">{item.title}</Card.Title>
                        <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className=" btn card-btn">Go somewhere</Button>
                        </Card.Body>
                    </Card>
            ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Courses;
