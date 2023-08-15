// Get references to the HTML elements
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const sessionElement = document.getElementById('session');
const toggleBtn = document.getElementById('toggle-btn');

let is24HourFormat = false;

// Function to update the time display
function updateTime() {
  const now = new Date();

  // Update date and day
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
  const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
  dateElement.textContent = dateString;
  dayElement.textContent = dayString;

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update time display based on the selected format
  if (is24HourFormat) {
    hoursElement.textContent = hours.toString().padStart(2, '0');
    sessionElement.textContent = '';
  } else {
    const session = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hoursElement.textContent = hours.toString().padStart(2, '0');
    sessionElement.textContent = session;
  }

  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Toggle between 12-hour and 24-hour formats
function toggleTimeFormat() {
  is24HourFormat = !is24HourFormat;
  if (is24HourFormat) {
    toggleBtn.textContent = '12-hr';
  } else {
    toggleBtn.textContent = '24-hr';
  }
  updateTime();
}

// Update time every second
setInterval(updateTime, 1000);

// Add event listener to the toggle button
toggleBtn.addEventListener('click', toggleTimeFormat);

// Initial function call
updateTime();
toggleTimeFormat();