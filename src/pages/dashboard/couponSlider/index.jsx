import { Swiper, SwiperSlide } from "swiper/react";
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./style.module.scss";
import CouponCard from "../../../components/couponCard";
import { useEffect, useRef } from "react";
import {  useSelector } from "react-redux";
import SwiperCore, { Navigation } from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation]);  

const CoponSlider = () => {
    const swipRef=useRef(null)
    const prizeList= useSelector(state => state.prize.prizeList)
  



    useEffect(()=>{
        console.log('prizeList',prizeList)
    },[prizeList])


    const renderSlider=()=>(
        prizeList.map((item)=>(
            <SwiperSlide key={item.id}>
                <CouponCard 
                point={item.point}
                description={item.description}
                />
            </SwiperSlide>
        ))
    )
    return (        
        <div className="col-span-3">
            <div className={classes.alinclub__RewardSlider}>
            <div className={classes.alinclub__RewardSliderTitle}>
                <span>جوایز آلین کلاب</span>
                <div className={classes.alinclub__RewardArrows}>
                <Link href="/rewards">
                    <a>مشاهده همه</a>
                </Link>
                <i data-icon="p" className="prev"></i>
                <i data-icon="k" className="next"></i>
                </div>
            </div>

            <div className={classes.alinclub__RewardSliderContainer}>
                {prizeList
                ?
                <Swiper
                ref={swipRef}
                slidesPerView={2.5}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={false}               
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                className="mySwiper"
                >
                    {renderSlider()}
                </Swiper>
                :null
                }
            </div>
            </div>
      </div>
    );
}

export default CoponSlider;
