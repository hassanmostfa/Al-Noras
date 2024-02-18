import React from 'react'

const Achivements = () => {
    return (
        <div className='achivements-container container p-3'>
            <h3 className='text-center my-3'>!انجازاتنا</h3>
            <p className='text-center my-3'>لقد حقق نهجنا المهني والابداعي عوائد كبيرة لشركاء نجاحنا واكسبنا سمعة جيدة</p>
            <div className='achivements-items row justify-content-center text-center mx-5 mb-4 gap-2'>
                <div className='col-sm-3 small-line4'><span>+55<br/>مشروع قائم</span></div>
                <div className='col-sm-3 small-line3'><span>+100<br/>مشروع مكتمل</span></div>
                <div className='col-sm-3 small-line2'><span>+150<br/>شركاء نجاح</span></div>
                <div className='col-sm-3 small-line'><span>+2,548<br/>حملة اعلانية</span></div>
            </div>
        </div>
    )
}

export default Achivements
