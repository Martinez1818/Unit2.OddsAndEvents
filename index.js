// TODO: this file! :)

let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// Adding a number to the number bank
function addNumber(event) {
  event.preventDefault(); // Prevent form submission
  const numberInput = document.getElementById("number").value;
  const number = parseInt(numberInput);

  if (!isNaN(number)) {
    numberBank.push(number); // Add valid number to bank
    displayNumberBank();
    document.getElementById("number").value = ""; // Clear the input field
  } else {
    alert("Please enter a valid number.");
  }
}

// Sorting the first number from the bank
function sortOne() {
  if (numberBank.length > 0) {
    const number = numberBank.shift(); // Remove the first number

    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    displaySortedNumbers();
    displayNumberBank();
  }
}

// Sorting all numbers from the bank
function sortAll() {
  while (numberBank.length > 0) {
    sortOne(); // Reusing the sortOne function to sort all
  }
}

// Display the numbers in the number bank
function displayNumberBank() {
  const numberBankOutput = document.querySelector("#numberBank output");
  numberBankOutput.textContent = numberBank.join(", ");
}

// Display the sorted numbers (odds and evens)
function displaySortedNumbers() {
  const oddsOutput = document.querySelector("#odds output");
  const evensOutput = document.querySelector("#evens output");

  oddsOutput.textContent = oddNumbers.join(", ");
  evensOutput.textContent = evenNumbers.join(", ");
}

// Event listeners
document.querySelector("form").addEventListener("submit", addNumber);
document.getElementById("sortOne").addEventListener("click", sortOne);
document.getElementById("sortAll").addEventListener("click", sortAll);