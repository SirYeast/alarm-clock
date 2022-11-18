"use strict";

const time = document.getElementById("time");
const indicator = document.getElementById("indicator");
const alarmTime = document.getElementById("alarm-time");
const setAlarm = document.getElementById("set-alarm");

const timeRegex = /^((0|1)[0-9]|2[0-3]):[0-5][0-9]$/;

const alarmSound = new Audio("assets/audio/alarm.mp3");
alarmSound.type = "audio/mp3";

let alarm = "";

function updateTime() {
    let timeString = new Date().toTimeString().substring(0, 8);

    if (alarm == timeString) {
        alarmSound.play();

        alarm = "";

        indicator.style.display = "none";
        time.classList.add("active");
        setTimeout(() => time.classList.remove("active"), 5000);
    }

    time.innerText = timeString;
}

window.addEventListener("load", function() {
    updateTime();
    setInterval(updateTime, 1000);
});

setAlarm.addEventListener("click", function() {
    let val = alarmTime.value;

    if (timeRegex.test(val)) {
        alarm = val + ":00";
        indicator.innerText = `Alarm set for ${val}`;
    } else {
        indicator.innerText = "Please enter a valid time (HH:MM)";
    }

    indicator.style.display = "block";
});