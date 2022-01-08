import CouponSlider from "./couponSlider";
import NewSlider from "./newSlider";
import FAQ from "../../components/faq";
import CountDown from "../../components/countDown/countDown.component";
import classes from "./dashboard.module.scss";
import { getAllLotterty } from "../../store/lottery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import changeDate from "../../lib/changeDate";
import moment from "jalali-moment";
import getSeconds from "../../lib/getExactTime";
import { getTotalTransaction } from "../../store/transaction";
import { getAllPrize } from '../../store/prize'

export default function AfterLogin() {

  const dispatch = useDispatch()
  const lotteryList= useSelector(state => state.lottery.lotteryList)
  const totalTransaction= useSelector(state => state.transaction.totalTransaction)

  const [lotteryFillter,setLotteryFilter]=useState([])



  useEffect(() => {    
    dispatch(getAllLotterty())
    dispatch(getAllPrize())

    let body={
      customer_id:1
    }
    dispatch(getTotalTransaction(body))
  }, []);


  useEffect(()=>{
      if(lotteryList){
        let newLottery=[]
        let today=moment()
        lotteryList.data.map(item=>{
          let start_date=changeDate(item.start_date)
          let isafter_start = moment(start_date).isAfter(today);

          let end_date=changeDate(item.end_date)
          let isafter_end= moment(end_date).isAfter(today);
          if(!isafter_start && isafter_end){
            newLottery.push(item)
          }

        })
        setLotteryFilter(newLottery)
      }
  },[lotteryList])


  const renderLottery=()=>(
    lotteryFillter?
    lotteryFillter.map(item=>(       
        <section className={classes.alinclub__lottaryCountDown} key={item.id}>
          <div className="flex items-center">
            <div className="w-2/3">
              <h2 className={classes.alinclub__lottaryCountDownTitle}>
                قرعه کشی
              </h2>
              <p className={classes.alinclub__lottaryCountDownDesc}>
                {item.description}
              </p>
            </div>
            <div className="w-1/3">
              <CountDown time={getSeconds(item.end_date)}/>
            </div>
          </div>
        </section>  
    ))
    :null
  )

  return (
    <div className="alinclub__dashboardPage">
      <img
        className="w-auto"
        src="/assets/images/banner.png"
        alt="cta banner"
      />
      <div className="container mx-auto py-5">
        <section className="alinclub__dashboardItems grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className={classes.alinclub__dashboardMenu}>
              <div className={classes.alinclub__dashboardMenuTitle}>
                <img
                  src="/assets/images/alinclublogo.png"
                  alt="alinclub logo"
                />
                <div className={classes.alinclub__userReward}>
                  امتیاز شما:
                  <span className={classes.alinclub__userPoint}>
                    {totalTransaction ?totalTransaction.total :0}
                    <img src="/assets/images/alincoin.png" alt="alincoin" />
                  </span>
                </div>
              </div>

              <ul className={classes.alinclub__dashboardMenuItems}>
                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>

                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>

                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CouponSlider/>
        </section>

        {renderLottery()}

        <section>
          <NewSlider/>
        </section>
         <FAQ/>
        
      </div>
    </div>
  );
}

//  bg-white col-span-2
