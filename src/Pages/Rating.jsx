import React from 'react'

const Rating = () => {
    return (
        <div className='rating m-5 row justify-content-center p-3'>
        <div className='col-sm-8 text-center'>
            <div className='progress_container d-flex gap-2'>
                <span className='percentage'>100.0%</span>
                <span className='progress_bar'></span>
                <div className='d-flex align-items-center gap-2 justify-content-center'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
            </div>
            <div className='progress_container d-flex gap-2'>
                <span className='percentage'>100.0%</span>
                <span className='progress_bar'></span>
                <div className='d-flex align-items-center gap-2 justify-content-center'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
            </div>
            <div className='progress_container d-flex gap-2'>
                <span className='percentage'>100.0%</span>
                <span className='progress_bar'></span>
                <div className='d-flex align-items-center gap-2 justify-content-center'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
            </div>
        </div>
            <div className='col-sm-4'>
                <div className='rating_item text-center'>
                    <h3>متوسط التصنيف</h3>
                    <h1>4.5</h1>
                    <div className='d-flex align-items-center gap-2 justify-content-center'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
