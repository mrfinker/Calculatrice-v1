let timeNow = new Date();

console.log(timeNow.getHours());
console.log(timeNow.getMinutes());
console.log(
  setInterval(countUp = () => {
  timeNow.getSeconds() += 1
}, 1000));