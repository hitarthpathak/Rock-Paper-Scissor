let user_choices = document.querySelectorAll(".box[id^='user-']");
let computer_choices = document.querySelectorAll(".box[id^='computer-']");
let user_score_data = document.querySelector("#user-score");
let computer_score_data = document.querySelector("#computer-score");
let result = document.querySelector("#result");

// --------------------------------------------------------------------------------------------------

let user_score = 0;
let computer_score = 0;

// --------------------------------------------------------------------------------------------------

function show_selection(user_choice, computer_choice) {
    let user_choice_box = document.getElementById(`user-${user_choice}`);
    if (user_choice_box) {
        user_choice_box.style.boxShadow = "0px 0px 20px 10px blue";
    }
    let computer_choice_box = document.getElementById(`computer-${computer_choice}`);
    if (computer_choice_box) {
        computer_choice_box.style.boxShadow = "0px 0px 20px 10px red";
    }
};

// --------------------------------------------------------------------------------------------------

function clear_selection() {
    user_choices.forEach((box) => {
        box.style.boxShadow = "none";
    });
    computer_choices.forEach((box) => {
        box.style.boxShadow = "none";
    });
};

// --------------------------------------------------------------------------------------------------

user_choices.forEach((box) => {
    box.addEventListener("click", () => {
        let user_choice = box.id.replace("user-", "");
        clear_selection();
        play_game(user_choice);
    });
});

// --------------------------------------------------------------------------------------------------

function generate_computer_choice() {
    let options = ["rock", "paper", "scissor"]
    let randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
};

// --------------------------------------------------------------------------------------------------

function play_game(user_choice) {
    let computer_choice = generate_computer_choice();

    show_selection(user_choice, computer_choice);

    if (user_choice === computer_choice) {
        result.textContent = "[ Game Is Draw! ]";
        result.style.backgroundColor = "white";
    }
    else {
        let user_win = true;
        if (user_choice === "rock") {
            user_win = computer_choice === "paper" ? false : true;
        }
        else if (user_choice === "paper") {
            user_win = computer_choice === "scissor" ? false : true;
        }
        else {
            user_win = computer_choice === "rock" ? false : true;
        }
        show_winner(user_win, user_choice, computer_choice);
    }
};

// --------------------------------------------------------------------------------------------------

function show_winner(user_win, user_choice, computer_choice) {
    let show_user_choice = user_choice.toUpperCase();
    let show_computer_choice = computer_choice.toUpperCase();
    if (user_win) {
        user_score++;
        user_score_data.textContent = user_score;
        result.textContent = `[ You Win! Your ${show_user_choice} beats Computer's ${show_computer_choice} ]`;
        result.style.backgroundColor = "green";
    }
    else {
        computer_score++;
        computer_score_data.textContent = computer_score;
        result.textContent = `[ You Loose! Computer's ${show_computer_choice} beats Your ${show_user_choice} ]`;
        result.style.backgroundColor = "red";
    }
};