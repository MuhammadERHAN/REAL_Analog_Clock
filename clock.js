let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();
  // getting h, m, s from date object
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ms = date.getMilliseconds(); // Get milliseconds for smoother animation
  let smoothSec = s + ms / 1000; // Calculate smooth seconds for smoother animation

  let hRotation = 30 * h + m / 2; // 360/12 = 30 and 30/60 = 0.5
  let mRotation = 6 * m + smoothSec / 10; // 360/60 = 6 and 6/60 = 0.1
  let sRotation = 6 * smoothSec; // 360/60 = 6

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  requestAnimationFrame(displayTime); // Use requestAnimationFrame for smoother animation
}
displayTime();
// SECOND LOGIC FOR ROTAION OPTIONAL
// let totalSeconds = h*3600 + m*60 + s + ms/1000;

//       let secRotation = totalSeconds * 6;    // 360/60 = 6 deg per second
//       let minRotation = totalSeconds * 0.1;  // 360/3600 = 0.1 deg per second
//       let hrRotation  = totalSeconds / 120;  // 360/43200 = 1/120 deg per second
