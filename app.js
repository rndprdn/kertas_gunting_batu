let userScore = 0;
let compScore = 0;
let result = document.getElementsByClassName("result > p");
const userScoreSpan = document.getElementById("user_score");
const compScoreSpan = document.getElementById("comp_score");
const div_batu = document.getElementById("b");
const div_gunting = document.getElementById("g");
const div_kertas = document.getElementById("k");

getCompChoice = () => {
  const choices = ['b', 'g', 'k'];
  const randomNumber = Math.floor((Math.random() * 3));
  return choices[randomNumber];
}

win = () => {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
}

lose = () => {
  compScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
}

draw = () => {
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
}

game = (userChoice) => {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "bg":
      result = "Batu bisa patahin Gunting, Kamu Menang!";
      win();
      break;
    case "gk":
      result = "Gunting potong kertas, Kamu Menang!";
      win();
      break;
    case "kb":
      result = "Kertas membungkus batu, Kamu Menang!";
      win();
      break;

    case "bk":
    case "gb":
    case "kg":
      console.log("Comp WIN!");
      lose();
      break;

    case "bb":
    case "gg":
    case "kk":
      console.log("You DRAW!");
      break;
  }
}

div_batu.addEventListener('click', function () {
  game("b")
});

div_gunting.addEventListener('click', function () {
  game("g")
});

div_kertas.addEventListener('click', function () {
  game("k")
});

