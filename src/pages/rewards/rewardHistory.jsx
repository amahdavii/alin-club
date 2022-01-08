import RewardLayout from "../../layout/rewardLayout";
import classes from "./rewardHistory.module.scss";

export default function rewardHistory() {
  return (
    <RewardLayout>
      <section className={classes.alinclub__rewardHistoryTable}>
        <div className="grid grid-cols-1">
          <table className="table-auto text-right">
            <thead className={classes.alinclub__rewardHistoryTitle}>
              <tr>
                <th>امتیاز</th>
                <th>شرح فعالیت</th>
                <th>تاریخ فعالیت</th>
              </tr>
            </thead>
            <tbody className={classes.alinclub__rewardHistoryDetail}>
              <tr>
                <td className={classes.alinclub__receivedRewardPoint}>
                  ۳۰
                  <span
                    data-icon="m"
                    className={classes.receivedRewardIcon}
                  ></span>
                </td>
                <td>
                  <div className={classes.alinclub__rewardActivities}>
                    دریافت کد تخفیف ۱۰ هزار تومانی آلین لند برای خریدهای بیش از
                    ۱۰۰ هزار تومان
                    <div className={classes.alinclub__discountArea}>
                      <span className={classes.alinclub__discountCode}>
                        LDW4-8T96eWp
                        <span data-icon="d"></span>
                      </span>
                      <span className={classes.alinclub__discountCredit}>
                        اعتبار تا 31 شهریور 1400
                      </span>
                    </div>
                  </div>
                </td>
                <td>20 مرداد 1400</td>
              </tr>
              <tr>
                <td className={classes.alinclub__spentRewardPoint}>
                  40
                  <span
                    data-icon="s"
                    className={classes.spentRewardIcon}
                  ></span>
                </td>
                <td>
                  <div className={classes.alinclub__rewardActivities}>
                    خرید از آلین لند
                    <a href="#" className={classes.vieworder}>
                      مشاهده سفارش
                    </a>
                  </div>
                </td>
                <td>20 مرداد 1400</td>
              </tr>
              <tr>
                <td className={classes.alinclub__receivedRewardPoint}>
                  40
                  <span
                    data-icon="m"
                    className={classes.receivedRewardIcon}
                  ></span>
                </td>
                <td>
                  <div className={classes.alinclub__rewardActivities}>
                    کد شرکت در قرعه کشی آیفون
                    <div className={classes.alinclub__discountArea}>
                      <span className={classes.alinclub__discountCode}>
                        LDW4-8T96eWp
                        <span data-icon="d"></span>
                      </span>
                      <span className={classes.alinclub__discountCredit}>
                        اعتبار تا 31 شهریور 1400
                      </span>
                    </div>
                  </div>
                </td>
                <td>20 مرداد 1400</td>
              </tr>
              <tr>
                <td className={classes.alinclub__spentRewardPoint}>
                  40
                  <span
                    data-icon="s"
                    className={classes.spentRewardIcon}
                  ></span>
                </td>
                <td>کد شرکت در قرعه کشی آیفون</td>
                <td>20 مرداد 1400</td>
              </tr>
              <tr>
                <td className={classes.alinclub__spentRewardPoint}>
                  40
                  <span
                    data-icon="s"
                    className={classes.spentRewardIcon}
                  ></span>
                </td>
                <td>کد شرکت در قرعه کشی آیفون</td>
                <td>20 مرداد 1400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </RewardLayout>
  );
}
