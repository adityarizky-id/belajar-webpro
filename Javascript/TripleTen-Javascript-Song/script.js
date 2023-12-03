let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');

const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");

function renderAdded() {
  let songs = songsContainer.querySelectorAll('.song');

  if (songs.length === 0) {
    resetButton.setAttribute('disabled', true);
    resetButton.classList.add('form__submit-btn_disabled');
  } else {
    resetButton.removeAttribute('disabled');
    resetButton.classList.remove('form__submit-btn_disabled');
  }
}

function addSong() {
  songsContainer.innerHTML += `
    <div class="song">
      <h4 class="song__artist">The Cars</h4>
      <p class="song__title">Drive</p>
      <button class="song__like"></button>
    </div>
  `;

  // Call renderAdded function after a song is added
  renderAdded();
}

addButton.addEventListener('click', addSong);

// Call renderAdded function when the page is loaded
renderAdded();