var score = document.getElementById("Global-score");
var score1 = 0
var rslt = document.getElementById("result");
var choices = document.getElementById("choices");
var compChoice1 = ["rock", "paper", "scissors"];
var pics = document.getElementById("pics");
var choice = document.getElementById("choices");
var playAgain = document.getElementById("play-again")

//conditions about game!

function first() {
    choice.style.visibility = "visible";
    document.getElementById("user").src = "images/icon-rock.png";

    var compChoice = Math.random();
    if (compChoice < 0.34) {
        console.log(compChoice1[0]);
        rslt.textContent = ("you choose the same. Try again!");
        document.getElementById("computer").src = "images/icon-rock.png";

    } else if (compChoice > 0.34 && compChoice < 0.67) {
        console.log(compChoice1[1]);
        rslt.textContent = ("You Loose...Try again.!")
        score.textContent = (score1 -= 1)
        document.getElementById("computer").src = "images/icon-paper.png";


    } else {
        console.log(compChoice1[2]);
        rslt.textContent = ("You Win...!");
        score.textContent = (score1 += 1);
        document.getElementById("computer").src = "images/icon-scissor.png";
    }
    pics.style.visibility = "hidden";

}

function second() {
    choice.style.visibility = "visible";
    document.getElementById("user").src = "images/icon-paper.png";

    var compChoice = Math.random();
    if (compChoice < 0.34) {
        console.log(compChoice1[0]);
        rslt.textContent = ("You Win...!");
        document.getElementById("computer").src = "images/icon-rock.png";

        score.textContent = (score1 += 1);

    } else if (compChoice > 0.34 && compChoice < 0.67) {
        console.log(compChoice1[1]);
        rslt.textContent = ("you choose the same. Try again!")
        document.getElementById("computer").src = "images/icon-paper.png";

    } else {
        console.log(compChoice1[2]);
        rslt.textContent = ("You Loose...Try again.!");
        score.textContent = (score1 -= 1)
        document.getElementById("computer").src = "images/icon-scissor.png";
    }
    pics.style.visibility = "hidden";
}

function third() {
    choice.style.visibility = "visible";
    document.getElementById("user").src = "images/icon-scissor.png";

    var compChoice = Math.random();
    if (compChoice < 0.34) {
        console.log(compChoice1[0]);
        rslt.textContent = ("You Win...!");
        score.textContent = (score1 += 1);
        document.getElementById("computer").src = "images/icon-paper.png";

    } else if (compChoice > 0.34 && compChoice < 0.67) {
        console.log(compChoice1[1]);
        rslt.textContent = ("You Loose...Try again.!");
        score.textContent = (score1 -= 1)
        document.getElementById("computer").src = "images/icon-rock.png";

    } else {
        console.log(compChoice1[2]);
        rslt.textContent = ("you choose the same. Try again!")
        document.getElementById("computer").src = "images/icon-scissor.png";
    }
    pics.style.visibility = "hidden";
}

function playagain() {
    pics.style.visibility = "visible";
    choice.style.visibility = "hidden";

}

//Toggle for rules menu!!


var ruleImg = document.getElementById("rules-image");

function forToggle() {

    if (ruleImg.style.display === "none") {
        ruleImg.style.display = "block";
    } else {
        ruleImg.style.display = "none";
    }
}