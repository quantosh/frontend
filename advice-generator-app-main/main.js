const adviceBtn = document.getElementById("random__advice__button");
const adviceId = document.getElementById("advice__id")
const advicePhrase = document.getElementById("advice__phrase");

function getRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const { slip } = data
      adviceId.innerText = `advice # ${slip.id}`;
      advicePhrase.innerText = `"${slip.advice}"`;
    });
}

adviceBtn.addEventListener("click",getRandomAdvice());




