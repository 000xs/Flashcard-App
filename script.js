// Select elements
const add = document.querySelector(".add-card");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const addBtn = document.querySelector("#add-flashcard");
const flashcardList = document.getElementById("flashcard-list");

// Initialize flashcards from local storage
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

// Set cursor style for add button
add.style.cursor = "pointer";

// Function to fetch and display flashcards
function fetchCards() {
  flashcardList.innerHTML = ""; // Clear existing cards
  flashcards.forEach((flashcard) => {
    flashcardList.innerHTML += `
            <div class="card">
                <div class="question">${flashcard.question}</div>
                <div class="answer">${flashcard.answer}</div>
            </div>
        `;
  });
}

// Call the function to fetch and display cards
fetchCards();

// Open modal when add button is clicked
add.addEventListener("click", () => {
  modal.style.display = "flex"; // Show modal
});

// Close modal function
function closeModal() {
  modal.style.display = "none"; // Hide modal
}

// Close button functionality
close.style.cursor = "pointer";
close.addEventListener("click", closeModal);

// Add Flashcard Function
addBtn.addEventListener("click", () => {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;

  if (question && answer) {
    const flashcard = { question, answer };
    flashcards.push(flashcard);
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    fetchCards(); // Refresh the flashcard list
    document.getElementById("flashcard-form").reset(); // Reset the form
    closeModal(); // Close the modal
  } else {
    alert("Please fill in both fields.");
  }
});
