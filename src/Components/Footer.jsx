import React from 'react'
import Payment1 from "../images/Payment1.png" ;
import Payment2 from "../images/Payment2.png" ;
import Payment3 from "../images/Payment3.png" ;
import Payment4 from "../images/Payment4.png" ;
import Payment5 from "../images/Payment5.png" ;

function Footer() {
    return (
        <div className='footer text-center mt-3'>
                <div className='payment-methods row py-3 justify-content-center mt-8 bg-white'>
                    <div><img src={Payment1} alt="" width={150}/></div>
                    <div><img src={Payment2} alt="" width={100}/></div>
                    <div><img src={Payment3} alt="" width={100}/></div>
                    <div><img src={Payment4} alt="" width={100}/></div>
                    <div><img src={Payment5} alt="" width={150}/></div>
                </div>
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
