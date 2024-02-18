import React from "react";

const Props = () => {
    return (
        <div className="container content">
        <h3
            style={{ color: "var(--main-color)", fontSize: "40px" }}
            className="text-center my-5"
        >
            ما يميزنا ؟
        </h3>
        <div className="my-5">
            <div className="row props-container justify-content-center">
            <div className="col-sm-4 props-item1"><p>التركيز علي الانتاج والسرعة</p></div>
            <div className="col-sm-4 props-item"><p>التعامل مع العلامة التجارية<br/> كانها لنا وليس مجرد عميل</p></div>
            <div className="col-sm-4 props-item1"><p>العمل بشغف</p></div>
            </div>
            <div className="row props-container justify-content-center my-3">
            <div className="col-sm-4 props-item"><p>تحقيق اعلي مستويات الجودة</p></div>
            <div className="col-sm-4 props-item1"><p>مرونة التكيف <br/> مع المتغيرات الخارجية</p></div>
            <div className="col-sm-4 props-item"><p> حلول مبتكرة <br/> تلبي احتياجات العملاء بشكل دقيق</p></div>
            </div>
        </div>
        </div>
    );
};

export default Props;
