import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import classes from "./slider.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { getMainBaner } from '../../../store/baner'

import { useEffect } from "react";
export default function HomeSlider() {
  const dispatch = useDispatch()
  const banerList= useSelector(state => state.baner.banerList)



  useEffect(() => {    
    dispatch(getMainBaner())
  }, []);

  useEffect(() => {    
    // console.log('actionList',banerList)
  }, [banerList]);
  return (
    <section className={classes.alinclub__slider}>
      <img src={"/assets/images/club_slider-no_text.png"}/>
      {/* <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top_first}>slider 1</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom_first}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 2</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 3</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 4</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 5</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
}
