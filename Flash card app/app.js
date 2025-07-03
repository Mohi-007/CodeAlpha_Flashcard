let flashcards = [
  { question: "Capital of France?", answer: "Paris" },
  { question: "5 x 6?", answer: "30" },
  { question: "H2O is?", answer: "Water" },
  { question: "Largest continent?", answer: "Asia" },
  { question: "Fastest land animal?", answer: "Cheetah" },
];

let currentIndex = 0;

const questionText = document.getElementById("questionText");
const userAnswer = document.getElementById("userAnswer");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
const result = document.getElementById("result");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");

function displayCard() {
  questionText.textContent = flashcards[currentIndex].question;
  userAnswer.value = "";
  result.textContent = "";
}

checkAnswerBtn.addEventListener("click", () => {
  const typed = userAnswer.value.trim().toLowerCase();
  const correct = flashcards[currentIndex].answer.toLowerCase();
  if (typed === correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong! Answer: ${flashcards[currentIndex].answer}`;
    result.style.color = "red";
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard();
});

addBtn.addEventListener("click", () => {
  if (questionInput.value && answerInput.value) {
    flashcards.push({
      question: questionInput.value,
      answer: answerInput.value,
    });
    questionInput.value = "";
    answerInput.value = "";
    currentIndex = flashcards.length - 1;
    displayCard();
  }
});

editBtn.addEventListener("click", () => {
  if (questionInput.value) {
    flashcards[currentIndex].question = questionInput.value;
  }
  if (answerInput.value) {
    flashcards[currentIndex].answer = answerInput.value;
  }
  displayCard();
});

deleteBtn.addEventListener("click", () => {
  flashcards.splice(currentIndex, 1);
  if (flashcards.length === 0) {
    flashcards.push({ question: "No cards left", answer: "" });
  }
  currentIndex = 0;
  displayCard();
});

displayCard();
