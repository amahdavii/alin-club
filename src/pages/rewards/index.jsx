import RewardLayout from "../../layout/rewardLayout";
import CouponCard from "../../components/couponCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrize } from '../../store/prize'
import { useEffect } from "react";


var mocSlider = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 110, 111, 112, 113,
];

export default function RewardsPage() {
  const dispatch = useDispatch()
  const prizeList= useSelector(state => state.prize.prizeList)


  useEffect(() => {    
    dispatch(getAllPrize())
  }, []);

  const renderCoupon=()=>(
  
    prizeList.map((item)=>(
      <div className="col-span-1" id={item.id}>
        <CouponCard       
        point={item.point}
        description={item.description}
        />
      </div>
    ))
  )

  return (
    <RewardLayout>
      <div className="grid grid-cols-4 gap-4">
        {prizeList ?renderCoupon() :null}
      </div>
    </RewardLayout>
  );
}
