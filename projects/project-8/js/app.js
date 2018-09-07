const main = document.getElementsByClassName('container');
const main_modals = document.getElementsByClassName('modal-container');
const overlays = document.getElementsByClassName('overlay');
const card = document.getElementsByClassName('user-card');
const randomUser = document.querySelectorAll('.user');
const $search = $('#search');
const $displayUser = $('.user-card');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
  .then(response => response.json())
  .then(data => generateUsers(data.results))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateUsers(data) {
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const html = `
      <div class="user-card">
        <img class="user-image" src='${user.picture.large}' alt>
        <div class="info">
          <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
          <p class="user-email">${user.email}</p>
          <p class="user-city">${user.location.city}</p>
        </div>
      </div>
    `;
    main[0].innerHTML += html;

    // Generating user modals when is clicked
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener('click', function() {
        bindModal(data, i);
      });
    }
  }
}

function bindModal(data, index) {
  createModals(data, index);
  const next = document.querySelector('.right-button');
  const previous = document.querySelector('.left-button');
  // next user
  next.addEventListener('click', function() {
    bindModal(data, index+1);
  });
  // previous user
  previous.addEventListener('click', function() {
    bindModal(data, index-1);
  });
}

function createModals(data, index) {
  const user = data[index];
  const html = `
    <div class="user">
      <div class="overlay">
        <span class="left-button">&lt;</span>
        <div class="user-info">
          <span class="exit-button">&#935;</span>
          <img class="user-image" src='${user.picture.large}' alt>
          <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
          <p class="user-email">${user.email}</p>
          <p class="user-city">${user.location.city}</p>
          <hr>
          <p class="user-phone">${user.cell}</p>
          <p class="user-address">${user.location.street}, ${user.location.state} ${user.location.postcode}</p>
          <p class="date-of-birth">DoB: ${user.dob.date.substring(5,7)}/${user.dob.date.substring(8,10)}/${user.dob.date.substring(0,4)}</p>
        </div>
        <span class="right-button">&gt;</span>
      </div>
    </div>
  `;
  main_modals[0].innerHTML = html;

  const userInfo = document.querySelector('.user');
  const exit = document.querySelector('.exit-button');

  // display overlay
  userInfo.style.display = "block";

  // close overlay
  exit.addEventListener('click', function() {
    userInfo.style.display = "none";
  });
}

$search.on('keyup', function() {
  const $input = $search.val().toLowerCase();
  let displayUser = document.getElementsByClassName('user-name');
  console.log(displayUser)

  for (let i = 0; i < displayUser.length; i++) {
    const userText = displayUser[i].textContent;
    if (userText.includes($input)) {
      displayUser[i].parentNode.parentNode.style.display = "block";
    } else {
      displayUser[i].parentNode.parentNode.style.display = "none";
    }
  }
});
