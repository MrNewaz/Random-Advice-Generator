const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const pp = document.querySelector(".p");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      h1.innerText = data.slip.advice;
    });
});

pp.addEventListener("click", () => {
  window.location.reload();
});
