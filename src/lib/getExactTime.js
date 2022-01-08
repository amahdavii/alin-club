import moment from "jalali-moment";

const getSeconds= (endTime) => {

    moment.locale('fa', { useGregorianParser: true });
    var startTime = moment().format('YYYY-MM-DD HH:mm:ss')
    

    var seconds = moment(endTime).diff(startTime,"seconds");

        
    return seconds
}

export default getSeconds;
