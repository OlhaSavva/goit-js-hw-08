import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';
const feedbackForm = {};
let savedMessage = {};

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(handleFormInput), 500);

function handleFormInput(e) {
  feedbackForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

if (localStorage.getItem(STORAGE_KEY)) {
  savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (let key in savedMessage) {
    formEl.elements[key].value = savedMessage[key];
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
  }
}
