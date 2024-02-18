import React from 'react'
import Achivements from './Achivements'
import Location from './Location'
const Values = () => {
    return (
        <div className="container">
            <h3
                style={{ color: "var(--main-color)", fontSize: "40px" }}
                className="text-center my-5"
            >
                ! قيمنا  
            </h3>
            <div className="my-5">
                <div className="row justify-content-center values-container">
                    <div className="col-sm-2 values-item"><p>ابداع</p></div>
                    <div className="col-sm-2 values-item1"><p>تكنولوجيا</p></div>
                    <div className="col-sm-2 values-item"><p>احترافية </p></div>
                    <div className="col-sm-2 values-item1"><p>تعاون</p></div>
                    <div className="col-sm-2 values-item"><p>ابتكار</p></div>
                    <div className="col-sm-2 values-item1"><p>ولاء للعملاء</p></div>
                </div>
            </div>
            <Achivements/>
            <Location/>
        </div>
    )
}

export default Values
