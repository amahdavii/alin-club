import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalTransaction } from "../store/transaction";
import classes from "./rewardLayout.module.scss";



export default function RewardLayout(props) {
  const router=useRouter()
  const dispatch = useDispatch()
  const[selectRout,setSelectRout]=useState('/rewards')
  const totalTransaction= useSelector(state => state.transaction.totalTransaction)



  useEffect(() => {    
    if(!totalTransaction){
      let body={
        customer_id:1
      }
      dispatch(getTotalTransaction(body))
    }
  }, []);

  useEffect(()=>{
    setSelectRout(router?.pathname)
  },[router])
  return (
    <div className={classes.alinclub__rewardLayout}>
      <div className="container my-2 mx-auto">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-1">
            <div className={classes.alinclub__rewardSideMenu}>
              <div className={classes.alinclub__rewardSideContainer}>
                <div className={classes.alinclub__userSideReward}>
                  امتیاز شما:
                  <span className={classes.alinclub__userSidePoint}>
                    570
                    <img
                      className={classes.alinclub__userSideCoin}
                      src="/assets/images/alincoin.png"
                      alt="alincoin"
                    />
                  </span>
                </div>
              </div>
              <ul className={classes.alinclub__rewardMenuItems}>
                <li className={selectRout==='/rewards' ?classes.alinclub__rewardMenuItems_select :null}> 
                  <Link href="/rewards" >
                    <a className={selectRout==='/rewards' ?classes.alinclub__rewardMenuItem_select :classes.alinclub__rewardMenuItem}>
                      <span className="icon-card-giftcard-black-24dp"></span>
                      طرح ها و جوایز
                    </a>
                  </Link>
                </li>
                <li className={selectRout==='/rewards/receivedReward' ?classes.alinclub__rewardMenuItems_select :null}> 
                  <Link href="/rewards/receivedReward">
                    <a className={selectRout==='/rewards/receivedReward' ?classes.alinclub__rewardMenuItem_select :classes.alinclub__rewardMenuItem}>
                      <span className="icon-card-giftcard-black-24dp"></span>
                      جوایز دریافتی
                    </a>
                  </Link>
                </li>
                <li className={selectRout==='/rewards/rewardHistory' ?classes.alinclub__rewardMenuItems_select :null}> 
                  <Link href="/rewards/rewardHistory">
                    <a className={selectRout==='/rewards/rewardHistory' ?classes.alinclub__rewardMenuItem_select :classes.alinclub__rewardMenuItem}>
                      <span className="icon-local-activity-black-24dp"></span>
                      تاریخچه امتیازات
                    </a>
                  </Link>
                </li>
                <li className={selectRout==='/lottary' ?classes.alinclub__rewardMenuItems_select :null}> 
                  <Link href="/lottary">
                    <a className={selectRout==='/lottary' ?classes.alinclub__rewardMenuItem_select :classes.alinclub__rewardMenuItem}>
                      <span className="icon-bingo"></span>
                      قرعه کشی آلین کلاب
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-5">
            <div className={classes.alinclub__rewardMain}>
              <div className={classes.alinclub__rewardTitleContainer}>
                <div className={classes.alinclub__rewardMainTitle}>
                  جوایز آلین کلاب
                </div>
                {/* <ul className={classes.alinclub__rewardFilterItems}>
                  <li className={classes.alinclub__rewardFilterItem}>همه</li>
                  <li className={classes.alinclub__rewardFilterItem}>سایت تخفیف های گروهی</li>
                  <li className={classes.alinclub__rewardFilterItem}>فروشگاه اینترنتی کالا</li>
                  <li className={classes.alinclub__rewardFilterItem}>تفریح و سرگرمی</li>
                  <li className={classes.alinclub__rewardFilterItem}>رستوران و کافی شاپ</li>
                </ul> */}
              </div>
              
              <div className={classes.alinclub__rewordMainContent}>
                {props.children}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
