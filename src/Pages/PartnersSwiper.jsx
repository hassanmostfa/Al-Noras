import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";
import partner5 from "../images/partner5.png";
import partner6 from "../images/partner6.png";
import partner7 from "../images/partner7.png";
import partner8 from "../images/partner8.png";

const PartnersSwiper = () => {
    return (
        <div className="container content partners-swiper">
        <h2 className="title my-3">شركاء النجاح</h2>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="my-5 container text-center"
        >
            <SwiperSlide className="d-flex justify-content-center partners-logos gap-3">
            <div>
                <Link to="">
                <img src={partner1} width={100} alt="" className="mx-5 mt-4" />
                </Link>
            </div>
            <div>
                <Link to="">
                <img src={partner2} width={100} alt="" className="mx-5 mt-4" />
                </Link>
            </div>
            <div>
                <Link to="">
                <img src={partner3} width={100} alt="" className="mx-5" />
                </Link>
            </div>
            <div>
                <Link to="">
                <img src={partner4} width={100} alt="" className="mx-5" />
                </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center partners-logos gap-3">
            <div>
                <Link to="">
                <img src={partner5} width={100} alt="" className="mx-5" />
                </Link>
            </div>
            <div>
                <Link to="">
                <img src={partner6} width={100} alt="" className="mx-5" />
                </Link>
            </div>
            <div>
                <Link to="">
                <img src={partner7} width={100} alt="" className="mx-5" />
                </Link>
            </div>
            <div>
                <Link to="">
                <img src={partner8} width={100} alt="" className="mx-5" />
                </Link>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default PartnersSwiper;
