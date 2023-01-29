import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-msg";
const feedbackForm = {};
let savedMessage = {};

const formEl = document.querySelector(".feedback-form");
formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(handleFormInput), 500);
populateInput();

function handleFormInput(e) {
  feedbackForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
  localStorage.getItem(STORAGE_KEY);
}

function populateInput() {
  savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);
  if (savedMessage) {
    formEl.email.value = savedMessage.email;
    formEl.message.value = savedMessage.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
