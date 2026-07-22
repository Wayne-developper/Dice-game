function pickout() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".card1 img").src = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".card2 img").src = "./images/dice" + randomNumber2 + ".png";

    const title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        title.textContent = "Player 2 Wins! 🚩";
    } else {
        title.textContent = "Draw!";
    }
}

document.querySelector("button").addEventListener("click", pickout);