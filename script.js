const increaseButton = document.querySelector(".Increase");
const DecreaseButton = document.querySelector(".Decrease");
const ResetButton = document.querySelector(".Reset");
const counterH1 = document.querySelector(".Counter");
let oddEvenH2 = document.querySelector(".odd-even h2");
let x = 0;

function updateOddEven(num) {
  if (num % 2 === 0) {
    oddEvenH2.textContent = "This number is Even";
  } else {
    oddEvenH2.textContent = "This number is Odd";
  }
}

ResetButton.addEventListener("click", () => {
  x = x - x;
  counterH1.textContent = x;
  updateOddEven(parseInt(x));
});

increaseButton.addEventListener("click", () => {
  x += 1;
  counterH1.textContent = x;
  updateOddEven(parseInt(x));
});

DecreaseButton.addEventListener("click", () => {
  x -= 1;
  counterH1.textContent = x;
  updateOddEven(parseInt(x));
});
