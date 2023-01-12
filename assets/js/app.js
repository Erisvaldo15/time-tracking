import data from './data.js'

const periods = document.querySelectorAll('.period')
const currentAll = document.querySelectorAll('.current')
const previousAll = document.querySelectorAll('.previous')

function handlePeriod(event) {

    for (let index = 0; index < periods.length; index++) {
        periods[index].classList.remove('active')
        // verify if there and remove the class 'active' of all elements 
    }

    const elementClicked = event.target

    elementClicked.classList.add('active')

    data.forEach((element, index) => {
        currentAll[index].textContent = element.timeframes[elementClicked.id].current + 'hrs'
        previousAll[index].textContent = `Last week - ${element.timeframes[elementClicked.id].previous}hrs`
    })
}

for (const period of periods) {
    period.addEventListener('click', event => handlePeriod(event)) 
}
