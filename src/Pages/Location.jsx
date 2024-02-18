import React from "react";
import vector_img from "../images/Vector-Smart-Object-copy.png";
import { Row, Form } from "react-bootstrap";

const Location = () => {
    return (
        <div className="ask-form container row justify-content-center align-items-center">
        <Row>
            <div className="col-lg-6 col-sm-12">
            <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3435.810511706254!2d31.01016427557342!3d30.554657274670667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMzJzE2LjgiTiAzMcKwMDAnNDUuOSJF!5e0!3m2!1sen!2seg!4v1708203515564!5m2!1sen!2seg"
            width="400"
            height="400"
            style={{ border: 0 , marginTop:"40px" , borderRadius:"10px"}}
            allowfullscreen=""
            loading="lazy"
            className="map"
            referrerpolicy="no-referrer-when-downgrade"
        >Our Location</iframe>
            </div>
            <div className="form d-flex justify-content-center align-items-center col-lg-6  col-sm-12">
            <div className="w-100">
                <h3
                className="text-center my-3"
                style={{ color: "var(--main-color)" }}
                >
                لا تتردد في التواصل معنا
                </h3>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="الاسم" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="email" placeholder="البريد الالكتروني" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" placeholder="رقم الهاتف" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" placeholder="الموضوع" />
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit">ارسل رسالة</button>
                </div>
                </Form>
            </div>
            </div>
        </Row>
        </div>
    );
};

export default Location;
