function initApp() {
  console.log('Hello from JavaScript land.');
  updateTheSubmitButton();
}

function updateTheSubmitButton() {
  var submitButton = document.getElementById('submit');
  console.log('submitButton:', submitButton);
  submitButton.innerHTML = 'Display Skus';
}
// Manual Sku Submit
function addSku(e) {
 if (e.keyCode === 13) {
   let userInput = document.getElementById('sku-input');
   let textNode = document.createTextNode(userInput.value);
   let li = document.createElement('li');
   li.appendChild(textNode);

   let sku = document.getElementById('sku');
   sku.appendChild(li);

   userInput.value = '';
   return false;  // prevents event from bubbling
 }
}
// 4 functions
// 1st - 7digit sku randomization
// 2nd - 10digit sku randomization
// 3rd - quantity incrementer of 1 or 2
// 4th - display to screen result of 1 & 3 or 2 & 3
function skuRnd() {
    var x = document.getElementById("sku")
    x.innerHTML = Math.floor((Math.random()* 1041000) + 1041000000);
}
// AutoGen Sku Submit
function genSku(f) {
 if (f.keyCode === 13) {
   let userInput = document.getElementById('autoGen');
   let textNode = document.createTextNode(userInput.value);
  //  let li = document.createElement('li');
   let li = document.createElement('p');
   li.appendChild(textNode);

   let sku = document.getElementById('sku');
   sku.appendChild(li);

   userInput.value = '';
   return false;  // prevents event from bubbling
 }
}
