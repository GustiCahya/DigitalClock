const hour_span = document.querySelector('#hour');
const minute_span = document.querySelector('#minute');
const second_span = document.querySelector('#second');

function clock() {
    const fullDate = new Date();
   
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    (hours < 10) ? hours = '0' + hours:
    (mins < 10) ? mins = '0' + mins:
    (secs < 10) ? secs = '0' + secs:
    'not available';

    hour_span.innerHTML = hours + ':';
    minute_span.innerHTML = mins + ':';
    second_span.innerHTML = secs;
}

setInterval(clock,100);

