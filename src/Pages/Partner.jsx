import React from "react";
import Partner5 from "../images/partner5.png";
import Partner6 from "../images/partner6.png";
import Partner7 from "../images/partner7.png";
import Partner8 from "../images/partner8.png";
import ContactUs from "./ContactUs";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";

const Partner = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <div className="p-5">
        <div>
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
                <div style={{ color: "orange" }}>
                {" "}
                الاعتمادات التي توفرها النورس
                </div>
            </div>
            </Button>
            <Collapse in={open}>
            <div id="example-collapse-text">
                <div className="col-sm-3">
                <p style={{ textAlign: "center" }}>Issue 1</p>
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
                <div style={{ color: "var(--main-color)" }}>
                <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div style={{ color: "var(--main-color)" }}>
                {" "}
                هل يعتد بهذة الشهادة من قبل الجهات الحكومية ؟
                </div>
            </div>
            </Button>
            <Collapse in={open1}>
            <div id="example-collapse-text">
                <div className="col-sm-3">
                <p style={{ textAlign: "center" }}>Issue 1</p>
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
                <div style={{ color: "orange" }}>اتفاقيات التعاون للنورس</div>
            </div>
            </Button>
            <Collapse in={open2}>
            <div id="example-collapse-text">
                <div className="col-sm-3">
                <p style={{ textAlign: "center" }}>Issue 1</p>
                </div>
            </div>
            </Collapse>
            {/* Collapse 4 */}
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
                <div style={{ color: "orange" }}>هل شهادات النورس معتمدة ؟</div>
            </div>
            </Button>
            <Collapse in={open3}>
            <div id="example-collapse-text">
                <div className="col-sm-3">
                <p style={{ textAlign: "right" }}>Issue 1</p>
                </div>
            </div>
            </Collapse>
            {/* collapse 5 */}
            <Button
            onClick={() => setOpen4(!open4)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            className="issue-btn"
            >
            <div className="d-flex justify-content-between position-relative p-2">
                <div style={{ color: "orange" }}>
                <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div style={{ color: "orange" }}>
                خطط النورس للاعتمادات المستقبلية
                </div>
            </div>
            </Button>
            <Collapse in={open4}>
            <div id="example-collapse-text">
                <div className="col-sm-3">
                <p style={{ textAlign: "center" }}>Issue 1</p>
                </div>
            </div>
            </Collapse>
        </div>
        <br />
        <h2 className="title my-3">شركائنا</h2>
        <div className="logos_container row justify-content-center m-5 gap-3">
            <div className="col-md-3 text-center">
            <Link to="">
                <img src={Partner5} width={100} alt="" className="mx-4" />
            </Link>
            </div>
            <div className="col-md-3 text-center">
            <Link to="">
                <img src={Partner6} width={100} alt="" className="mx-4" />
            </Link>
            </div>
            <div className="col-md-3 text-center">
            <Link to="">
                <img src={Partner7} width={100} alt="" className="mx-4" />
            </Link>
            </div>
            <div className="col-md-3 text-center">
            <Link to="">
                <img src={Partner8} width={100} alt="" className="mx-4" />
            </Link>
            </div>
        </div>
        <ContactUs className="my-5" />
        </div>
    );
};

export default Partner;
