import React from "react";
import vector_img from "../images/Vector-Smart-Object-copy.png";
import {Row , Form } from "react-bootstrap";

const ContactUs = () => {
    return (
        <div className="ask-form container">
        <Row>
            <div className="image col-lg-6 col-sm-12">
            <img src={vector_img} alt="vector" />
            </div>
            <div className="form d-flex justify-content-center align-items-center col-lg-6  col-sm-12">
            <div className="w-100">
                <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>الاسم ثلاثي</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>رقم الهاتف مفعل عليه واتس اب </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>البريد الالكتروني</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>هل لديك اي استفسارات </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit">ارسال</button>
                </div>
                </Form>
            </div>
            </div>
        </Row>
        </div>
    );
};

export default ContactUs;
