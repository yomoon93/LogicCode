const timeConversion =(s)=> {
    let hour = s.substring(0,2) * 1
    // console.log(hour)
    let timeFormat = s.substring(2,8)
    // console.log(timeFormat)
    if(hour === 12 && s.indexOf('AM') !== -1){
        return ("00" + timeFormat);
    }
    if(hour === 12 && s.indexOf('PM') !== -1){
        return (hour + timeFormat)
    }
    if (hour < 12 && s.indexOf("PM") !== -1) {
        return (12 + hour + timeFormat);
    } else { // if hour is from 1 to 11 AM
        if (hour < 10) { // if number is less than 10, add a zero in front
            return ("0" + hour + timeFormat);
        } else { // if number is greater than 9, just add rest of string
            return (hour + timeFormat);
        }
    }
}

console.log(timeConversion('07:25:45PM'))