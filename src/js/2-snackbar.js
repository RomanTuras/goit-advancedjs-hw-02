// Snackbar

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

// iziToast settings
iziToast.settings({
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

// Handling submit
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const delay = form.elements.delay.value;
  const isFulfilled = form.elements.state.value == "fulfilled";

  form.reset();

  new Promise((resolve, reject) => {
    if (isFulfilled) {
      resolve(delay);
    } else {
      reject(delay);
    }
  })
    .then(delay => {
      setTimeout(() => {
        iziToast.success({
          message: `✅ Fulfilled promise in ${delay}ms`
        });
      }, delay)
    })
    .catch(delay => {
      setTimeout(() => {
        iziToast.error({
          message: `❌ Rejected promise in ${delay}ms`
        });
      }, delay)
    });
}