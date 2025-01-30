const dateDiv = document.querySelector(".currentTime");
const date = new Date();

const hours = date.getUTCHours().toString().padStart(2, "0");
const minutes = date.getUTCMinutes().toString().padStart(2, "0");
const seconds = date.getUTCSeconds().toString().padStart(2, "0");

dateDiv.textContent = `${hours}:${minutes}:${seconds}`;
