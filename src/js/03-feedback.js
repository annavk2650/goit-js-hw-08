import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', onFormSubmit);

let data = {};

function onFormChange() {
  data.email = input.value;
  data.message = textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (savedData) {
    input.value = parsedData.email;
    textarea.value = parsedData.message;
    return parsedData;
  }
}
saveData();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(saveData());
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
