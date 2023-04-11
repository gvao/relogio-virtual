const clockContainer = document.querySelector(".clock-container")

const insertClockInHTML = (hours, minutes, seconds) => {
    const clockHTML = `
        <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> : 
        <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> : 
        <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    `

    clockContainer.innerHTML = clockHTML
}

const getCurrentDate = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    return {
        hours, minutes, seconds,
    }
}

const updateCLock = () => {
    const {
        hours, minutes, seconds
    } = getCurrentDate()

    insertClockInHTML(hours, minutes, seconds)
}

setInterval(updateCLock, 1000)