import React from 'react'
import feedback_img from '../images/Feedback.png' ;

const Feedback = () => {
    return (
        <div className='container my-5 content'>
            <h2 className='title my-3'>بعض اراء شركاء نجاحنا</h2>
            <div className='imgs-container row justify-content-center my-5 gap-4'>
                <div><img src={feedback_img} alt='' width={300}/></div>
                <div><img src={feedback_img} alt='' width={300}/></div>
                <div><img src={feedback_img} alt='' width={300}/></div>
                
            </div>
        </div>
    )
}

export default Feedback ;
