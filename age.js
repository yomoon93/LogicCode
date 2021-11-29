//Age: 28, Year: 2023
const howOld = (age, year) => {
  let currentDate = new Date(); //NOV 22 2021
  //2021
  let currentYear = currentDate.getFullYear();
  let yearDiff = year - currentYear;
  // 2023 - 2021 = 2
  //28 + 2 = 30
  let newAge = age + yearDiff;
  //The if statement for the three answers you can get
  if (newAge > age) {
    return `You will be ${newAge} the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};
console.log(howOld(28, 2016));
