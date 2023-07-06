const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

const updateClock = () => {
    const present = new Date()
    const hours = String(present.getHours()).padStart(2, "0")
    const minutes = String(present.getMinutes()).padStart(2, "0")
    const seconds = String(present.getSeconds()).padStart(2, "0")

    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
}

setInterval(updateClock, 1000)
