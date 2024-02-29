import React, { useState } from "react";
import { useParams, NavLink , Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";
import Navbar3 from "../Components/Navbar3";
import Categories from "../Components/Categories";
import img from "../images/HM logo .png";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import lecturerImg from "../images/Picture1.png";
import Rating from "./Rating";
const CourseDetails = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

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
            <div className="row gap-2 documemtations">
                <img src={img} alt="" width={100} />
                <img src={img} alt="" width={100} />
                <img src={img} alt="" width={100} />
            </div>
            <div className="d-flex gap-3 mt-5 btn_group">
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
        {/*Start course details collapse*/}
        <div className="mx-3 course_details_collapse">
            {/* Collapse 1 */}
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
        {/*End course details collapse*/}

        {/*Start course lectures*/}
        <div className="course_lectures my-5">
            <h2 className="lectures_title">المحاضرات</h2>
            {/* Collapse 1 */}
            <div className="mx-3">
            <Button
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
                className="issue-btn"
            >
                <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div
                    style={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: "22px",
                    }}
                >
                    {" "}
                    المحاضرة الاولي
                </div>
                </div>
            </Button>
            <Collapse in={open3}>
                <div id="example-collapse-text">
                <div>
                    <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                    </p>
                </div>
                </div>
            </Collapse>
            {/* Collapse 2 */}
            <Button
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}
                className="issue-btn"
            >
                <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div
                    style={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: "22px",
                    }}
                >
                    {" "}
                    المحاضرة الثانية
                </div>
                </div>
            </Button>
            <Collapse in={open4}>
                <div id="example-collapse-text">
                <div>
                    <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                    </p>
                </div>
                </div>
            </Collapse>
            {/* Collapse 3 */}
            <Button
                onClick={() => setOpen5(!open5)}
                aria-controls="example-collapse-text"
                aria-expanded={open5}
                className="issue-btn"
            >
                <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div
                    style={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: "22px",
                    }}
                >
                    {" "}
                    الامتحان النهائي
                </div>
                </div>
            </Button>
            <Collapse in={open5}>
                <div id="example-collapse-text">
                <div>
                    <p className="my-3 p-2">
                    هي المجموعة الرئيسة التي تهدف لتطوير وتنمية المستوى العليا في
                    المجال العلمي والتعليمي
                    </p>
                </div>
                </div>
            </Collapse>
            </div>
            {/*End course lectures*/}
            {/* Start Lecturer Section */}
            <div className="lecturer_section my-5" >
                <h2 className="lecturer_title">المدربين</h2>
                <div className="row m-4">
                    <div className="col-sm-3 lecturer_info container">
                        <h3 className="lecturer_name">Hassan Mostafa</h3>
                        <div className="lecturer_img my-3">
                            <img src={lecturerImg} alt="" width={100} />
                        </div>
                        <NavLink to={"/"}><i className="fa-brands fa-linkedin mb-3"></i></NavLink>
                    </div>
                    <div className="col-sm-9 lecturer_qualifications">
                        <div className="d-flex gap-2">
                            <i className="fa-solid fa-user"></i>
                            <p> خبرة أكثر من 20 سنة فى مجال المحاسبة المالية استشارى ومدير مالي للعديد من الشركات التجارية والصناعية خبرة فى مجال التدريب وتأهيل المحاسبة</p>
                        </div>
                        <div className="d-flex gap-2">
                            <i className="fa-solid fa-star"></i>
                            <p><span>0.00</span> تقييم المحاضر</p>
                        </div>
                        <div className="d-flex gap-2">
                            <i className="fa-solid fa-play"></i>
                            <p> خبرة أكثر من 20 سنة فى مجال المحاسبة المالية استشارى ومدير مالي للعديد من الشركات التجارية والصناعية خبرة فى مجال التدريب وتأهيل المحاسبة</p>
                        </div>
                    </div>
                </div>
            </div>
                {/* End Lecturer Section */}
                {/* Start Rate Section */}
                <Rating/>
                {/* End Rate Section */}
                {/* Start Form Section */}
                <p className="notice my-2">من فضلك <Link>سجل دخولك</Link> اولا ثم اضف سؤالك</p>
                <h3 className="my-3 form_title">هل لديك سؤال؟</h3>
                <form className="form_data mx-5">
                    <textarea placeholder="اضف سؤالك" className="my-2" /> <br/>
                    <input type="file" className="my-3"/><br/>
                    <button className="btn btn-primary">اضافة سؤالك</button>
                </form>
                <p className="notice my-2">من فضلك <Link>سجل دخولك</Link> اولا ثم اضف سؤالك</p>
                {/* End Form Section */}
                </div>
            <Footer />
        </div>
    );
};

export default CourseDetails;
