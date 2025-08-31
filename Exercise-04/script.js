// Exercise 4 -digital clock

//create a digital clock using SetInterval and date object in javaScript
// The date object can be used to get the date, time, hours, and seconds which can be updated using setInterval.
const updateCloak = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0'); // Get hours and format to 2 digits
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes and format to 2 digits
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds and format to 2 digits
document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`; // Display the time in HH:MM:SS format

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById('date').textContent = date.toLocaleDateString(undefined, options); // Display the date in a readable format

// Analog clock update
const secDeg = (seconds / 60) * 360;
const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // Minute hand moves with seconds
const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30; // Hour hand moves with minutes

document.getElementById('second').style.transform =`translateX(-50%) rotate(${secDeg}deg)`;
document.getElementById('minute').style.transform =`translateX(-50%) rotate(${minDeg}deg)`;
document.getElementById('hour').style.transform =`translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateCloak, 1000); // Update the clock every second
updateCloak(); // Initial call to display the clock immediately