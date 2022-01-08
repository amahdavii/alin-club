import CountDown from "../../components/countDown/countDown.component";
import RewardLayout from "../../layout/rewardLayout";
import classes from "./lottary.module.scss";

export default function LottaryPage() {
  return (
    <RewardLayout>
      <section className="alinclub__lottaryCta">
        <a href="#">
          <img src="/assets/images/banner-lottary.png" alt="banner lottary" />
        </a>
      </section>

      <section className={classes.alinclub__lottaryCondition}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 pr-4">
            <h1 className={classes.alinclub__lottaryConditionTitle}>
              شرایط قرعه کشی
            </h1>
            <ul className={classes.conditionItems}>
              <li className={classes.conditionItem}>
                با خرج هر ۵ امتیاز، ۱ شانس شرکت در قرعه‌کشی دریافت خواهید کرد که
                پس از دریافت، قابل بازگشت نیست
              </li>
              <li className={classes.conditionItem}>
                طی ۲۴ تا ۴۸ ساعت کاری پس از قرعه‌کشی با برندگان تماس گرفته
                می‌شود و هماهنگی‌های لازم جهت تحویل جایزه به ایشان صورت می‌گیرد،
                تماس با برندگان قرعه کشی از طریق اطلاعات تماس ثبت شده توسط
                برندگان در حساب کاربری در وب سایت آلین لند انجام می‌شود
              </li>
              <li className={classes.conditionItem}>
                هر جایزه تا ۶۰ روز بعد از اعلام نتایج قرعه‌کشی برای برنده
                نگهداری می‌شود و تیم آلین لند‌کلاب برای اعطای آن با برنده تماس
                خواهد گرفت و چنانچه پس از گذشت موعد مقرر برنده برای دریافت جایزه
                اقدام ننماید، حقوق مادی و معنوی برای آلین لند ‌کلاب محفوظ خواهد
                بود
              </li>
              <li className={classes.conditionItem}>
                اسامی برندگان متعاقبا از سایت آلین لند‌کلاب اعلام خواهد شد
              </li>
              <li className={classes.conditionItem}>
                قرعه کشی به صورت زنده در اینستاگرام اکانت رسمی آلین لند پخش
                خواهد شد
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <CountDown />
          </div>
        </div>
      </section>

      <section className={classes.alinclub__rewardLottary}>
        <h1 className={classes.alinclub__lottaryRewardTitle}>
          جوایز قرعه کشی
        </h1>
        <div className="flex flex-wrap">
          <img
            className={classes.alinclubLottaryItem}
            src="/assets/images/Group13095.png"
            alt=""
          />
          <img
            className={classes.alinclubLottaryItem}
            src="/assets/images/Group13087.png"
            alt=""
          />
          <img
            className={classes.alinclubLottaryItem}
            src="/assets/images/Group13088.png"
            alt=""
          />

          <img
            className={classes.alinclubLottaryItem}
            src="/assets/images/Group13089.png"
            alt=""
          />
          <img
            className={classes.alinclubLottaryItem}
            src="/assets/images/Group13090.png"
            alt=""
          />
          <img
            className={classes.alinclubLottaryItem}
            src="/assets/images/Group13091.png"
            alt=""
          />
        </div>
      </section>
    </RewardLayout>
  );
}
