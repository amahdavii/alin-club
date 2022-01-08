import classes from '../style.module.scss';


const NewCard = () => {
    return (
        <div className={classes.alinclub__NeWCardContainer}>
           
           <img
            className={classes.alinclub__NeWCardImage}
            src="/assets/images/maskGroup.png"
            alt="mask group"
            />
            <div className={classes.alinclub__NeWCardTextConatiner}>
                <span>قرعه کشی بهار ۱۴۰۰</span>
                <p>تمامی اعضای دیجی کلاب از ابتدای بهار تا پایان خرداد ماه ۹۹ فرصت داشته‌اند که با خرج ۱۰ امتیاز یک بلیت یا  تمامی اعضای دیجی کلاب از ابتدای بهار تا پایان خرداد ماه ۹۹ فرصت داشته‌اند که با خرج ۱۰ امتیاز یک بلیت یا </p>
            </div>        
        </div>
    );
}

export default NewCard;
