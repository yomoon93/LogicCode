const getSleepHours = day =>{
    day=day.toLowerCase()
switch(day){
    case 'monday': 
    return 8
    case 'tuesday': 
    return 8
    case 'wednesday': 
    return 8
    case 'thursday': 
    return 3
    case 'friday': 
    return 6
    case 'saturday': 
    return 8
    case 'sunday': 
    return 8
}

}
const getActualSleepHours =()=> getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('saturday')+getSleepHours('sunday')
    




const getIdealSleepHours = () => {
    const idealHours = 7
    return idealHours * 7

}

console.log(getActualSleepHours()); 
 
console.log(getIdealSleepHours()); 

const calculateSleepDebt = () =>{
        let actualSleepHours = getActualSleepHours()
        let idealSleepHours = getIdealSleepHours()
        if(actualSleepHours == idealSleepHours){
            console.log("Perfect amount of sleep! ")
        }if(actualSleepHours > idealSleepHours){
            console.log("You got enough sleep get up kid! " +(idealSleepHours - actualSleepHours) )
        }if(actualSleepHours < idealSleepHours){
            console.log("You got " + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.' )
        }
       
}
calculateSleepDebt()



