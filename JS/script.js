var audio = new Audio("alarmsound.wav");

let hours = document.getElementById(`hours`);
let minutes = document.getElementById(`minutes`);

setInterval(() => {
  let hid = document.getElementById(`hid`);
  let mid = document.getElementById(`mid`);
  let sid = document.getElementById(`sid`);
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (hour >= 13) {
    hour = hour - 12;
  }
  hid.innerText = hour;
  mid.innerText = minute;
  sid.innerText = second;
}, 1);

let btn = document.getElementById(`btn`);
btn.addEventListener(`click`, func1);
let proceed = true;
function func1() {
  console.log(`Some one clicked to set alarm`);
  let hoursValue = Number(hours.value);
  let minutesValue = Number(minutes.value);
  let html = `<div class="alert alert-success" role="alert">
  Your alarm will rang on ${hoursValue} : ${minutesValue}
</div>`;
  let success = document.getElementById(`success`);
  success.innerHTML = html;
  document.getElementById(`h1`).classList.remove(`my-5`);
  document.getElementById(`h1`).classList.add(`my-4`);
  setTimeout(() => {
    console.log(`I am ready`);
    document.getElementById(`h1`).classList.add(`my-5`);
    html = ``;
    success.innerHTML = html;
  }, 3000);

  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (hour >= 13) {
      hour = hour - 12;
    }

    if (hoursValue == hour && minutesValue == minute) {
      let submitid = document.getElementById(`submitid`);
      submitid.addEventListener(`click`, () => {
        audio.pause();
        proceed = false;
      });
      if (proceed) {
        audio.play();
      }
    }
  }, 1);
  hours.value = ``;
  minutes.value = ``;
}
