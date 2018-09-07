const alert = document.querySelector(".alert");
const close = document.querySelector(".close");
const message = document.querySelector(".message-user");
const textarea = document.querySelector(".message-user textarea");
const submit = document.querySelector(".submit");
const alertMessage = document.querySelector(".alert-up");

close.addEventListener('click', () => {
  alert.style.display = "none";
});

function popUpMessage(string) {
  const alertBox = document.createElement("span");
  alertBox.classList.add("alert-up");
  alertBox.innerHTML = string;
  message.insertBefore(alertBox, submit);
}

submit.addEventListener('click', () => {
  if (textarea.value === "") {
    popUpMessage("Message box is empty!");
  } else {
    popUpMessage("Your message is sent!");
  }
});
