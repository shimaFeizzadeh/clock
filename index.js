
const secoundHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
function doDate() {
    const now = new Date();
    const secound = now.getSeconds()
    const secoundDegrees = ((secound / 60) * 360) + 90

    const minute = now.getMinutes()
    const minDegrees = ((minute / 60) * 360) + 90

    const hour = now.getHours()
    const hourDegrees = ((hour / 24) * 360)

    secoundHand.style.transform = `rotate(${secoundDegrees}deg)`
    minuteHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(doDate, 1000);