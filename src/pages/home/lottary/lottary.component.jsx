
import classes from "./lottary.module.scss";

export default function LottarySection() {
  return (
    <section className={classes.alinclub__lotterySection}>
        <div className="flex">
          <div className="alinclub__lotteryDesc w-2/3">
            <h2 className={classes.alinclub__lotteryTitle}>
              قرعه کشی فصلی آلین کلاب
            </h2>
            <p className={classes.alinclub__lotteryParagraph}>
              در پایان هر فصل سال، یک قرعه کشی بزرگ با جوایزی هیجان انگیز در
              آلین لند کلاب برگزار می شود که برای شرکت در این قرعه کشی کافیست ۵
              امتیاز خرج کنید تا یک بلیت قرعه کشی دریافت کنید و نیز می توانید با
              خرید بلیت های بیشتر شانس بیشتری برای برنده شدن داشته باشید. جوایز
              کسب شده توسط شما در صفحه تاریخچه امتیازات در آلین لند کلاب قابل
              مشاهده است
            </p>
          </div>

          <div className="alinclub__lotteryImg  w-1/3">
            <img src="/assets/images/lottery.png" alt="Lottery Image" />
          </div>
        </div>
    </section>
  );
}
