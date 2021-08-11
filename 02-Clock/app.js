var time = new Date();
var sec = time.getSeconds();

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

const moveHands = ({ second, minute, hour }) => {
  let secAngle = second * 6 + 90;
  let minAngle = minute * 6 + 90;
  let horAngle = hour * 6 + 90;

  secondHand.style.transform = `rotate(${secAngle}deg)`;
  minuteHand.style.transform = `rotate(${minAngle}deg)`;
  hourHand.style.transform = `rotate(${horAngle}deg)`;
};

const getTime = () => {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const time = { second, minute, hour };
  moveHands(time);
  console.log(time);
};

setInterval(() => {
  getTime();
}, 1000);
