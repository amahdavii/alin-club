import Link from "next/link";
import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.alinclub__footer}>
      <div className="container mx-auto">
        <div className="alinclub__footerFeatures">
          <ul className={classes.alinclub__footerItems}>
            <li className={classes.alinclub__footerItem}>
              <span
                data-icon="e"
                className={classes.alinclub__footerItemIcon}
              ></span>
              <span>ارسال سریع</span>
            </li>

            <li className={classes.alinclub__footerItem}>
              <span
                data-icon="g"
                className={classes.alinclub__footerItemIcon}
              ></span>
              <span>ضمانت ۷ روزه بازگشت کالا</span>
            </li>
            <li className={classes.alinclub__footerItem}>
              <span
                data-icon="t"
                className={classes.alinclub__footerItemIcon}
              ></span>
              <span>پشتیبانی 24 ساعته</span>
            </li>

            <li className={classes.alinclub__footerItem}>
              <span
                data-icon="q"
                className={classes.alinclub__footerItemIcon}
              ></span>
              <span>پرداخت امن</span>
            </li>
          </ul>
        </div>

        <div className={classes.alinclub__footerColumnContainer}>
          <div className="grid grid-cols-4">
            <nav className={classes.alinclub__footerColumnLink}>
              <span className={classes.alinclub__footerColumnTitle}>
                آلین لند
              </span>
              <ul>
                <li>
                  <Link href="/">
                    <a>درباره آلین لند</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>تماس با آلین لند</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>مجله آلین لند</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>نقشه سایت</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>فرصت های شغلی</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={classes.alinclub__footerColumnLink}>
              <a
                className={classes.alinclub__footerColumnTitle}
                href="alinland.com"
              >
                راهنمای مشتریان
              </a>

              <ul>
                <li>
                  <Link href="/">
                    <a>تلفن پشتیبانی: 91070099-021</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>راهنمای خرید و پرداخت</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>رویه بازگرداندن کالا</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>قوانین و مقررات</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>سوالات متداول</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>حریم خصوصی</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={classes.alinclub__footerColumnLink}>
              <a
                className={classes.alinclub__footerColumnTitle}
                href="alinland.com"
              >
                راهنمای خرید از آلین لند
              </a>
              <ul>
                <li>
                  <Link href="/">
                    <a>ثبت سفارش</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>روش های ارسال</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>روش های پرداخت</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>پیگری سفارش</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>سوالات متداول</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>حریم خصوصی</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={classes.alinclub__footerColumnSocial}>
              <div className={classes.alinclub__footerSocials}>
                <a
                  className={classes.alinclub__footerColumnTitle}
                  href="alinland.com"
                >
                  همراه همیشگی ما شوید:
                </a>
                <ul className={classes.alinclub__footerSocialItems}>
                  <li>
                    <a href="https://instagram.com">
                      <span data-icon="i"></span>
                    </a>
                  </li>

                  <li>
                    <a href="https://instagram.com">
                      <span data-icon="h"></span>
                    </a>
                  </li>

                  <li>
                    <a href="https://instagram.com">
                      <span data-icon="v"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className={classes.alinclub__footerNews}>
                <span className={classes.alinclub__footerNewsTitle}>
                  اطلاعات از جدیدترین تخفیف ها و محصولات
                </span>
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد نمایید"
                  className={classes.alinclub__footerNewsInput}
                />

                <button
                  className={classes.alinclub__footerNewsBtn}
                  type="submit"
                >
                  عضویت
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className={classes.alinclub__footerBottomSection}>
          <div className="grid grid-cols-2 gap-4">
            <div className="alinclub__seoContainer">
              <h1 className={classes.alinclub__seoContainerTitle}>
                فروشگاه اینترنتی آلین لند، تجربه خرید اسرار آمیز{" "}
              </h1>
              <p>
                فروشگاه اینترنتی آلین لند فعالیت خود را از سال 99 آغاز کرده و با
                شروع فروش اینترنتی مجموعه کالای سوپرمارکتی متعهد شده است تا
                نیازهای مشتریان را در سراسر کشور برآورده کند. در آلین لند
                می‌توانید محصولات مورد نظرتان را اعم از خوردنی و آشامیدنی،
                آرایشی‌،بهداشتی و در مراحل بعدی لوازم خانگی،الکترونیکی،کالای
                دیجیتال،مد و پوشاک و ... را ضمن اطمینان از اصالت کالا، با بهترین
                کیفیت و اقتصادی ترین قیمت، با یک کلیک سفارش داده و با دقتی بی
                نظیر تحویل بگیرید
              </p>
              <span className={classes.moreDetail}>
                نمایش بیشتر
                <span className="icon icon-outline-arrow-left-ios-24px" />
              </span>
            </div>

            <div className="alinclub__trustLogos flex items-center justify-end">
              <a href="#">
                <img src="/assets/images/samandehi.png" alt="Samandehi" />
              </a>
              <a href="#">
                <img
                  className={classes.trust_logo}
                  src="/assets/images/logo-etehadiye.png"
                  alt="etehadie"
                />
              </a>

              <a href="#">
                <img src="/assets/images/enamad.png" alt="enamad" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.alinclub__footerCopyRight}>
        تمامی حقوق این سایت متعلق به سبک زندگی خلاق (زیرمجموعه هلدینگ میهن) می
        باشد
      </div>
    </footer>
  );
}
