let userscore = 0;
let computerscore = 0;

// --------------------------------------------------------------------------------------------------

const choices = document.querySelectorAll(".box");
const result = document.querySelector("#result");

const userscoredata = document.querySelector("#user-score");
const computerscoredata = document.querySelector("#computer-score");

// --------------------------------------------------------------------------------------------------

choices.forEach((box) => {
    box.addEventListener("click", () => {
        const userchoice = box.getAttribute("id")
        playgame(userchoice)
    })
})

// --------------------------------------------------------------------------------------------------

const generatecomputerchoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}

// --------------------------------------------------------------------------------------------------

const playgame = (userchoice) => {
    console.log("User Choice =", userchoice)
    const computerchoice = generatecomputerchoice();
    console.log("Computer Choice =", computerchoice)

    if (userchoice === computerchoice) {
        // draw game
        console.log("Draw!")
        result.innerText = "[ Game Is Draw! ]";
        result.style.backgroundColor = "white";
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            // paper, scissor
            userwin = computerchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            // rock, scissor
            userwin = computerchoice === "scissor" ? false : true;
        }
        else {
            // rock, paper
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, computerchoice);
    }
}

// --------------------------------------------------------------------------------------------------

const showwinner = (userwin, userchoice, computerchoice) => {
    if (userwin) {
        console.log("You Win!")
        userscore++;
        userscoredata.innerText = userscore;
        result.innerText = `[ You Win! Your ${userchoice} beats Computer's ${computerchoice} ]`;
        result.style.backgroundColor = "green";
    }
    else {
        console.log("You Loose!")
        computerscore++;
        computerscoredata.innerText = computerscore;
        result.innerText = `[ You Loose! Computer's ${computerchoice} beats Your ${userchoice} ]`;
        result.style.backgroundColor = "red";
    }
}