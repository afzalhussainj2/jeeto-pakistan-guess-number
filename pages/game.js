 "use strict";
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

const checkGuess = () => {
	const guessElement = document.querySelector(".guess");
	const guess = +guessElement.value;
	const scoreElement = document.querySelector(".score");
	const bodyElement = document.querySelector("body");
	const numberElement = document.querySelector(".number");
	const highScoreElement = document.querySelector(".highscore");

	// when there is no guess
	if (!guess) {
		displayMessage("⛔ Kch Bolo toh Sahi");

		// when guess is right
	} else if (guess === secretNumber) {
		guessElement.disabled = true;
		displayMessage(`🎉 ${guess} tolay sona huwa apka!`);
		bodyElement.style.backgroundColor = "#60b347";
		numberElement.style.width = "30rem";
		numberElement.textContent = secretNumber;
		if (score > highScore) {
			highScoreElement.textContent = highScore = score;
		}

		// when guess is wrong
	} else {
		if (guess > secretNumber) {
			displayMessage("📈 Zyada bta diya");
		} else {
			displayMessage("📉 Kam bta diya");
		}
		if (score > 0) {
			scoreElement.textContent = --score;
		}
		if (score <= 0) {
			displayMessage("💥 Agli Bar Koshish krna!");
			guessElement.disabled = true;
		}
	}
};

const resetHandler = () => {
	const scoreElement = document.querySelector(".score");
	const bodyElement = document.querySelector("body");
	const numberElement = document.querySelector(".number");
	const guessElement = document.querySelector(".guess");
	secretNumber = Math.floor(Math.random() * 20) + 1;
	// console.log(secretNumber); // just for testing
	score = 10;
	displayMessage(" Soch Lo...");
	bodyElement.style.backgroundColor = "#222";
	numberElement.style.width = "15rem";
	numberElement.textContent = "?";
	guessElement.disabled = false;
	guessElement.value = "";
	scoreElement.textContent = score;
};

let inputValue = "";

const restrictValue = () => {
	const guessElement = document.querySelector(".guess");
	const guessNumber = +guessElement.value;

	if (guessNumber >= 1 && guessNumber <= 20) {
		guessElement.value = guessNumber;
		inputValue = guessNumber;
	} else if (guessNumber === 0) {
		guessElement.value = "";
		inputValue = "";
	} else {
		guessElement.value = inputValue;
	}
};

document.querySelector(".guess").addEventListener("input", restrictValue);
document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", resetHandler);

// console.log(secretNumber); // just for testing
