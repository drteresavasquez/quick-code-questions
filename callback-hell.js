// BAD CODE

// const users = [];

// const callbackHell = () => {
//   const obj = {
//     name: document.querySelector('name'),
//     email: document.querySelector('email')
//   }
// }
// const eventListeners = () => {
//   document.querySelector('form').addEventListener('submit', callbackhell);
// }
// END BAD CODE!


const users = [];

const callbackHell = (e) => {
  e.preventDefault();
  const obj = {
    name: document.querySelector('name'),
    email: document.querySelector('email')
  }
}

// const eventListeners = () => {
//   document.querySelector('form').addEventListener('submit', callbackhell);
// }

// Q1: When I run, my app, nothing is happening.... Why??? 
// Q1: Answer - I did not call the function!
// const init = () => {
//   eventListeners();
// }

// init();

// Q2: I called my function, but now when I submit my form, I am getting an error:
// ```
// Uncaught ReferenceError: callbackhell is not defined
//     at eventListeners
// ```
// Q2: Answer - I mistyped callbackHell!
const eventListeners = () => {
  document.querySelector('form').addEventListener('submit', callbackHell);
}

// Q3: Typos are hard! Thank you @Gabrielle Tobermann for catching that! Now, everything seems to be fine except when I submit the form the page refreshes and I lose everything! :weary:
// Q3: Answer
// const callbackHell = () => {
//   e.preventDefault();
//   const obj = {
//     name: document.querySelector('name'),
//     email: document.querySelector('email')
//   }
// }


// Q4: Well....now page is still refreshing, but if I look closely, there is an error that says:
// Uncaught ReferenceError: e is not defined 
// What do I do???:thinking_face:


// FINAL QUESTION: Q5...you probably already saw it coming, but I am not getting any values when I console.log my obj in callbackHell....
// Tell me how I can get those values and then pass them to my user array PLEASE!!! HELP!!!

const init = () => {
  eventListeners();
}

init();
