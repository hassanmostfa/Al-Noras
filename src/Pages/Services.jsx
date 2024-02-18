import React from "react";
import { Row } from "react-bootstrap";

const Services = () => {
    return (
        <div className="services container my-4 content">
        <Row className="title text-center">
            <div className=" d-flex justify-content-center align-items-center">
            <h2>نبذة عن النورس للتدريب والتطوير المهني</h2>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
            <p className=" d-flex justify-content-center align-items-center my-3">
                {" "}
                في رحلة تطورك المهنية ستحاول النورس جاهدا ان تكون داعمك الاولز وذلك
                عبر تقديم افضل محتوي علمي وعملي ز وتدعيمه بالاعتمادات والاختبارات
                الدولية الكتخصصه وايضا تقديم كفاءات اصحاب الخبره الذين يجمعؤن بين
                العلوم بين العلوم الاكااديميه والخبره العمليه
            </p>
            </div>
        </Row>
        <Row className="cards d-flex justify-content-center align-items-center">
            <div className="card-item col-md-4 col-sm-12 col-lg-3">
            <h2>خدمتنا</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, sunt!
            </p>
            <button>مشاهدة المزيد</button>
            </div>
            <div className="card-item col-md-4 mx-4 col-lg-3 col-sm-12">
            <h2>خدمتنا</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                sunt!
            </p>
            <button>مشاهدة المزيد</button>
            </div>
            <div className="card-item col-md-4 col-lg-3 col-sm-12">
            <h2>خدمتنا</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                sunt!
            </p>
            <button>مشاهدة المزيد</button>
            </div>
        </Row>
        <Row className="bottom-title text-center d-flex justify-content-center align-items-center">
            <h2 className="my-4">...سعداء كونكم جزءا من نجاحنا</h2>
        </Row>
        </div>
    );
};

export default Services;
