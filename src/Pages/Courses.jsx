import React from "react";
import {Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../Components/Footer";
import { useState } from "react";
import Categories from "../Components/Categories";
import Navbar2 from "../Components/Navbar2";
import Navbar3 from "../Components/Navbar3";
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
        <Navbar2/>
        {/* Navbar 2 */}
        <Navbar3/>
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
                        <Button className=" btn card-btn">
                            <Link to={"/courseDetails/" + item.id}>Details</Link>
                        </Button>
                        </Card.Body>
                    </Card>
            ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Courses;
