import { questions } from "./data.js"; //사용하려면 html에 추가해야하는게 있음

const progessValueEl = document.querySelector(".progress .value"); //progress 내부에 있는거
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

//let 값 바꿀수 있음
let currentNumber = 0;
let mbti = ""; //문자 데이터 할당

function renderQuestion() {
  //명령들을 묶을 수 있음
  //render 무언가를 출력해준다

  const question = questions[currentNumber];
  numberEl.innerHTML = question.number; //이부분에 코드를 넣어 활용할 수 있음
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progessValueEl.style.width = (currentNumber + 1) * 10 + "%";
}

function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
  }

  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  // mbti = '단순 문자데이터' = 'i' + 'n' + 't' + 'p'
  currentNumber = currentNumber + 1;
  renderQuestion();
}

function showResultPage() {
  location.href = "/results.html?mbti=" + mbti; //퀴리스트링
}

choice1El.addEventListener("click", function () {
  nextQuestion(0);
});

choice2El.addEventListener("click", function () {
  nextQuestion(1);
});

renderQuestion(); //호출
