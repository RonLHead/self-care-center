var receiveMessage = document.querySelector('.receive-button');
var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');
var meditationBell = document.querySelector('#meditate-bell');
var displayMessage = document.querySelector('#message-display');
var inputName = document.querySelector('#input');
var welcomePage = document.querySelector('.welcome-box');
var mainPage = document.querySelector('.main-page');
var userName = document.querySelector('#user-name');
var userHere = document.querySelector('.welcome-user');
var box = document.querySelector('.box')

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

receiveMessage.addEventListener('click', getMessage);

inputName.addEventListener('click', showPage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getMessage(event) {
  event.preventDefault();

  if (radioAffirmation.checked) {
    var message = affirmations[getRandomIndex(affirmations)];
  } else if (radioMantra.checked) {
    var message = mantras[getRandomIndex(mantras)];
  }

  meditationBell.classList.add("hidden");
  displayMessage.classList.remove("hidden");
  displayMessage.innerText = message;
}

function showPage() {
  var getUser = `Welcome ${userName.value}`;

  welcomePage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");

  userHere.innerHTML = getUser;
}
