const form = document.querySelector(".form-quizz");
let results = [];
const responses = ["a", "b", "b", "c", "b"];
const emojis = ["💪", "🚀", "🧐", "😭", "👎"];
const titleResult = document.querySelector(".results h2");
const rateResult = document.querySelector(".rate");
const helpResult = document.querySelector(".help");
const allQuestions = document.querySelectorAll(".question-block");
let verifResults = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  for (let i = 1; i <= 5; i++) {
    const result = document.querySelector(`input[name="q${i}"]:checked`).value;
    results.push(result);
  }

  verifFunc(results);
  results = [];
});

verifFunc = (arrResults) => {
  for (let i = 0; i < 5; i++) {
    arrResults[i] === responses[i]
      ? verifResults.push(true)
      : verifResults.push(false);
  }
  displayResult(verifResults);
  colorBlock(verifResults);
  verifResults = [];
};

const displayResult = (arrToCheck) => {
  const countErrors = arrToCheck.filter((el) => el !== true).length;
  switch (countErrors) {
    case 0:
      titleResult.innerText = "🚀 Bravo, c'est un sans faute 🚀";
      helpResult.innerText = "";
      rateResult.innerText = "5/5";
      break;
    case 1:
      titleResult.innerText = "💪 C'est pas mal ! 💪";
      helpResult.innerText = "Essayez de vous corriger";
      rateResult.innerText = "4/5";
      break;
    case 2:
      titleResult.innerText = "🧐 Vous pouvez faire mieux 🧐";
      helpResult.innerText = "Essayez de vous corriger";
      rateResult.innerText = "3/5";
      break;
    case 3:
      titleResult.innerText = "😭 Ça me rend triste 😭";
      helpResult.innerText = "Essayez de vous corriger";
      rateResult.innerText = "2/5";
      break;
    case 4:
      titleResult.innerText = "👎 Va falloir bosser ! 👎";
      helpResult.innerText = "Essayez de vous corriger";
      rateResult.innerText = "1/5";
      break;
    case 5:
      titleResult.innerText = "😭😭😭 Sans commentaire !";
      helpResult.innerText = "Essayez de vous corriger";
      rateResult.innerText = "0/5";
      break;
  }
};

const colorBlock = (arr) => {
  for (let i = 0; i < 5; i++) {
    if (arr[i]) {
      allQuestions[i].style.borderColor = "lightgreen";
    } else {
      allQuestions[i].style.borderColor = "#ffb8b8";
      allQuestions[i].classList.add("echec");

      setTimeout(() => {
        allQuestions[i].classList.remove("echec");
      }, 500);
    }
  }
};
