import { Swiper, SwiperSlide } from "swiper/react";

import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./style.module.scss";
import { useEffect, useRef } from "react";

import SwiperCore, { Navigation } from "swiper";
import NewCard from "./newCard";

// install Swiper modules
SwiperCore.use([Navigation]);  

var mocSlider=[100,200,300,400,500,600,700,800,900,110,111,112,113]
const NewSlider = () => {


    const swipRef=useRef(null)

    useEffect(()=>{
        // console.log('swipRef',swipRef)
    },[swipRef])


    const renderSlider=()=>(
        mocSlider.map((item)=>(
            <SwiperSlide key={item}>
                <NewCard/>
            </SwiperSlide>
        ))
    )
    return (        
        <div className="col-span-1">
            <div className={classes.alinclub__RewardSlider}>
            <div className={classes.alinclub__RewardSliderTitle}>
                <span>تازه های آلین کلاب</span>
                <div className={classes.alinclub__RewardArrows}>
                <i data-icon="p" className="prevNew"></i>
                <i data-icon="k" className="nextNew"></i>
                </div>
            </div>

            <div className={classes.alinclub__RewardSliderContainer}>
                <Swiper
                ref={swipRef}
                slidesPerView={3}
                spaceBetween={100}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={false}               
                navigation={{
                    prevEl: '.prevNew',
                    nextEl: '.nextNew',
                }}
                className="mySwiper"
                >
                    {renderSlider()}
                </Swiper>
            </div>
            </div>
      </div>
    );
}

export default NewSlider;
