import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.scss";

export default function Header() {
  return (
    <header className={classes.alinclub__header}>
      <div className="container mx-auto">
        <div className={classes.alinclub__headerContainer}>
          <div className={classes.alinclub__logoarea}>
            <Link href="/">
              <a>
                <img src="/assets/images/logo.svg" alt="Alinland logo" />
              </a>
            </Link>
          </div>

          <div className={classes.alinclub__acountarea}>
            <a
              className={classes.alinclub__acountBtn}
              href="https://www.alinland.com/customer/account/login/"
            >
              <span className="icon-icon-feather-user-check flex ml-2"></span>
              ورود به حساب کاربری
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
