import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";
import Navbar3 from "../Components/Navbar3";
import Categories from "../Components/Categories";
import img from "../images/HM logo .png";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
const CourseDetails = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const { id } = useParams();
    const selectedItem = Categories.find((item) => item.id === parseInt(id));
    if (!selectedItem) {
        return <div>Item not found!</div>;
    }
    return (
        <div>
        {/* Navbar 1 */}
        <Navbar2 />
        {/* Navbar 2 */}
        <Navbar3 />
        <div className="course-details my-5 p-4 row justify-content-center">
            <div className="col-sm-6">
            {/*Start Course Details Links*/}
            <NavLink to={"/"}>الرئيسية</NavLink>
            <span> - </span>
            <NavLink to={"/courses"}>كورسات</NavLink>
            <span> - </span>
            <NavLink to={"#"}>{selectedItem.category}</NavLink>
            <span> - </span>
            <NavLink to={"#"}>{selectedItem.title}</NavLink>
            {/*End Course Details Links*/}

            {/*Start Course Details content*/}
            <div className="styledLink my-3">{selectedItem.category}</div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.describtion}</p>
            <h3 className="my-3">الاعتمادات والتوثيق</h3>
            <div className="row justify-content-start gap-2 ">
                <img src={img} alt="" width={100} />
                <img src={img} alt="" width={100} />
                <img src={img} alt="" width={100} />
            </div>
            <div className="d-flex gap-3 mt-5">
                <NavLink to={"#"} className="styledLink">
                الاسئلة الشائعة
                </NavLink>
                <NavLink to={"#"} className="styledLink">
                اضافة الي الخطط الدراسية
                </NavLink>
            </div>
            {/*End Course Details content*/}
            </div>
            <div className="col-sm-6">
            <div className="course-properties">
                <h3 className="text-center my-3">خصائص الكورس</h3>
                <ul>
                <div className="d-flex align-items-center my-2">
                    <span className="circle"></span>
                    <li>
                    <span>1:23:45</span> ساعة عند طلب الفيديو
                    </li>
                </div>
                <div className="d-flex align-items-center my-2">
                    <span className="circle"></span>
                    <li>2 محاضرات</li>
                </div>
                <div className="d-flex align-items-center my-2">
                    <span className="circle"></span>
                    <li>الوصول الكامل طوال فترة الاشتراك</li>
                </div>
                <div className="d-flex align-items-center my-2">
                    <span className="circle"></span>
                    <li>الوصول علي الهاتف المحمول والتليفزيون</li>
                </div>
                <div className="d-flex align-items-center my-2">
                    <span className="circle"></span>
                    <li>شهادة اتمام</li>
                </div>
                </ul>
                <button className="btn btn-primary">الاشتراك الان</button>
            </div>
            </div>
        </div>
        {/* Collapse 1 */}
        <div className="mx-3 course_details_collapse">
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="issue-btn"
            >
            <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div
                style={{ color: "orange", fontWeight: "bold", fontSize: "22px" }}
                >
                {" "}
                وصف الدورة التدريبية
                </div>
            </div>
            </Button>
            <Collapse in={open}>
            <div id="example-collapse-text">
                <div>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                </div>
            </div>
            </Collapse>
            {/* Collapse 2 */}
            <Button
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
            className="issue-btn"
            >
            <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div
                style={{ color: "orange", fontWeight: "bold", fontSize: "22px" }}
                >
                {" "}
                محاور الدورة التدريبية
                </div>
            </div>
            </Button>
            <Collapse in={open1}>
            <div id="example-collapse-text">
                <div>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                </div>
            </div>
            </Collapse>
            {/* Collapse 3 */}
            <Button
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            className="issue-btn"
            >
            <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div
                style={{ color: "orange", fontWeight: "bold", fontSize: "22px" }}
                >
                {" "}
                مراجع مساعده
                </div>
            </div>
            </Button>
            <Collapse in={open2}>
            <div id="example-collapse-text">
                <div>
                <p className="my-3 p-2">
                    
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                </p>
                </div>
            </div>
            </Collapse>
        </div>
        <Footer />
        </div>
    );
};

export default CourseDetails;
