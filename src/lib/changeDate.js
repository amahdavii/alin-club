import moment from "jalali-moment";

const changeDate = (date,type='date') => {
    var time=null;
    if(date!=null && type=='date'){
        moment.locale('fa');
        time=moment(date).format('jYYYY-jMM-jDD');
    }
    else if(date!=null && type=='time'){
        moment.locale('fa', { useGregorianParser: true });
        time=moment(date).format('HH:mm:ss');
    }
    return time
}

export default changeDate;
