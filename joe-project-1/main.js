function initApp() {
  console.log('Hello from JavaScript land.');
  updateTheSubmitButton();
}

function updateTheSubmitButton() {
  var submitButton = document.getElementById('submit');
  console.log('submitButton:', submitButton);
  submitButton.innerHTML = 'Looking Good';
}
