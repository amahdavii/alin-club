import { useEffect } from "react";
import {
    CircularProgressbarWithChildren,
    buildStyles,    
} from "react-circular-progressbar";
import { useSelector } from "react-redux";
import classes from './style.module.scss';
import RadialSeparators from'./RadialSeparators'

const CouponCard = (props) => {
    const{point,description}=props
    const totalTransaction= useSelector(state => state.transaction.totalTransaction)
    useEffect(()=>{
        console.log('totalTransaction',totalTransaction)
    },[totalTransaction])

    return (
        <div 
        className={classes.alinclub__voucher}
        style={{opacity:totalTransaction ?point%totalTransaction.total>100 ?"100%" :"50%" :'50%'}}
        >
            <div className={classes.alinclub__voucherPoint}>
                <span>{point}</span>
                <img src="/assets/images/alincoin.png" alt="Alincoin" />
            </div>
            <div className={classes.alinclub__voucherDetail}>
                <div className={classes.alinclub__voucherDetailTop}>
                <img
                    className={classes.alinclub__voucerLogo}
                    src="/assets/images/takhfifan-logo.png"
                    alt="takhfifan"
                />
                <div className={classes.alinclub__progressBar}>
                    <CircularProgressbarWithChildren
                    value={totalTransaction ?point%totalTransaction.total>100 ?100 :point%totalTransaction.total>100 :0}
                    // text={`${70}٪`}
                    strokeWidth={5}
                    styles={buildStyles({
                        pathColor: `rgb(237, 114, 3)`,
                        textColor: "#494f55",
                        textSize: "30px",
                    },
                    {root: {
                        verticalAlign: "middle"
                      }}
                    )}
                    >
                        <RadialSeparators
                        count={32}
                        style={{
                            background: "#fff",
                            width: "2px",
                            height: `${10}%`
                        }}
                        />
                        <span>{totalTransaction ?point%totalTransaction.total>100 ?100 :point%totalTransaction.total>100 :0}٪</span>
                    </CircularProgressbarWithChildren>
                </div>
                </div>

                <div className={classes.alinclub__voucherDetailDesc}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default CouponCard;
