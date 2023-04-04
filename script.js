// Get the DOM elements
const dobInput = document.getElementById('dob');
const unitSelect = document.getElementById('unit');
const calculateBtn = document.getElementById('calculate-btn');
const ageOutput = document.getElementById('age');
const dobError = document.getElementById('dob-error');

// Define the calculateAge function
function calculateAge() {
  // Get the user's date of birth
  const dob = new Date(dobInput.value);

  // Check if the user entered a valid date of birth
  if (isNaN(dob.getTime())) {
    dobError.innerText = 'Please enter a valid date of birth.';
    ageOutput.innerText = '';
    return;
  }

  // Get the current date
  const now = new Date();

  // Calculate the user's age in the selected unit
  const diff = now.getTime() - dob.getTime();
  let age;
  switch (unitSelect.value) {
    case 'years':
      age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      break;
    case 'months':
      age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      break;
    case 'days':
      age = Math.floor(diff / (1000 * 60 * 60 * 24));
      break;
    case 'hours':
      age = Math.floor(diff / (1000 * 60 * 60));
      break;
    case 'minutes':
      age = Math.floor(diff / (1000 * 60));
      break;
  }

  // Display the user's age
  ageOutput.innerText = `${age} ${unitSelect.value}`;
  dobError.innerText = '';
}

// Add a click event listener to the calculate button
calculateBtn.addEventListener('click', calculateAge);