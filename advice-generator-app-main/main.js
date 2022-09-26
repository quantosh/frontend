const advice = document.getElementById('advice');

fetch("https://api.adviceslip.com/advice")
.then(res => console.log(res))