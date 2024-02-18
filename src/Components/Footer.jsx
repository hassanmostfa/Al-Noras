import React from 'react'
// import payment from "../images/طرق-الدفع.png" ;
function Footer() {
    return (
        <div className='footer text-center mt-3'>
            {/*
                <div className='payment-methods  justify-content-center mt-8 bg-white'>
                    <div><img src={payment} alt="" width={500}/></div>
                </div>
            */}
            <div className='polices text-center py-3' >
                <div className='col-sm-12'>
                <div style={{width:"100%"}} className='row justify-content-center text-white py-3' >
                <span className='col-sm-2'>Privacy Policy</span>
                <span className='col-sm-2'>Terms and Conditions</span>
                <span className='col-sm-2'>استشارة مجانية</span>
                <span className='col-sm-2'>اتصل بنا</span>
            </div>
                </div>
            </div>
            <div className='copy-right text-center py-4' >
                <div className='col-sm-12'>جميع الحقوق محفوظة © لدي شركة النورس 2024</div>
            </div>
        </div>
    )
}

export default Footer
