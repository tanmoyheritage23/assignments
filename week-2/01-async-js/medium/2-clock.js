/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

// Your code here
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
function clock(){
    setInterval(() => {
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        if(hours == 24){
            hours = 0;
        }
        hours = hours < 10 ? '0' + hours : hours;
        console.log(`${hours}:${minutes.toString().padStart('0', 2)}::${seconds.toString().padStart(2, '0')}`);
    }, 1000);
}

function clockAMPM(){
    setInterval(() => {
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        console.log(`${hours}:${minutes.toString().padStart('0', 2)}::${seconds.toString().padStart(2, '0')} ${ampm}`);
        hours = parseInt(hours);
        if(hours < 12) hours += 12;
    }, 1000);
}

clock();
clockAMPM();