import React from 'react';


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../images/اعتمادات-1.png" ;
import img2 from "../images/اعتمادات-2.png"  ;  
import img3 from "../images/اعتمادات-3.png"  ;  


const MySwiper = () => {
    return (
        <div className='container content'>
        <h2 className='title my-3'>الاعتمادات والتوثيق</h2>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='my-5 container text-center'
        >
        <SwiperSlide><img src={img1} width={200} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img2} width={100} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img3} width={100} alt=""/></SwiperSlide>
        </Swiper>
        </div>
        );
};

export default MySwiper;
