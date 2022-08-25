const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

const secondsSpan = document.getElementById('seconds-span')
const minutesSpan = document.getElementById('minutes-span')
const hoursSpan = document.getElementById('hours-span')



function getTime(){
    const now  =  new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const timeInterval = 6

   
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds/10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes/2) + 'deg)'

    
    minutesSpan.innerText = minutes
    // to change the format from 24 hour to 12 hour clock
    if(hours >= 12){
        let new_hour = hours - 12;
        hoursSpan.innerText = new_hour
        secondsSpan.innerText = 'PM'
    }else{
        hoursSpan.innerText = hours
        secondsSpan.innerText = 'AM'
    }
    
}



setInterval(getTime, 100)