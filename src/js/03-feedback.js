import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';
let feedbackForm = {};

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(handleFormInput), 500);

function handleFormInput(e) {
  feedbackForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}
if (localStorage.getItem(STORAGE_KEY)) {
  feedbackForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (let key in feedbackForm) {
    formEl.elements[key].value = feedbackForm[key];
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(feedbackForm);
  feedbackForm = Object.entries(feedbackForm).reduce((acc, [key]) => {
    acc[key] = '';
    return acc;
  }, {});
}
