fetch("https://api.adviceslip.com/advice")
  .then((result) => result.json())
  .then((data) => console.log(data));

const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      h1.innerText = data.slip.advice;
    });
});
