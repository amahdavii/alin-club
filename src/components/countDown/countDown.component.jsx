import { useEffect, useState } from "react";
import classes from "./countDown.module.scss";
import getSeconds from "../../lib/getExactTime";

export default function CountDown(props) {

  const{time}=props
  let counter=0

  const[day,setDay]=useState(0)
  const[hours,setHours]=useState(0)
  const[minuts,setMinuts]=useState(0)
  const[secondes,setSeconds]=useState(0)


  const definTime=()=>{
    if(counter>0){  
      counter--
      var d = Math.floor(counter / (3600*24));
      var h = Math.floor(counter % (3600*24) / 3600);
      var m = Math.floor(counter% 3600 / 60);
      var s = Math.floor(counter % 60);
      setDay(d)
      setHours(h)
      setMinuts(m)
      setSeconds(s)
    }
  }

  useEffect(()=>{
    if(time){      
      counter=time     
    }
  },[time])

  useEffect(()=>{
    const interval =setInterval(definTime ,1000) 
    return () => clearInterval(interval);
  },[])


  return (
    <div className={classes.alinclub__countDownContainer}>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>{secondes}</span>
        <span className={classes.alinclub__countDownDate}>ثانیه</span>
      </div>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>{minuts}</span>
        <span className={classes.alinclub__countDownDate}>دقیقه</span>
      </div>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>{hours}</span>
        <span className={classes.alinclub__countDownDate}>ساعت</span>
      </div>
      <div className={classes.alinclub__countDown}>
        <span className={classes.alinclub__countDownTime}>{day}</span>
        <span className={classes.alinclub__countDownDate}>روز</span>
      </div>
    </div>
  );
}
