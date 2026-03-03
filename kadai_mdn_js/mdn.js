const currentTime =new Date();

const Year = currentTime.getFullYear();

const currentMonth =currentTime.getMonth() +1;

const currentDate =currentTime.getDate();

console.log(Year+"年"+currentMonth+"月"+currentDate+"日");
