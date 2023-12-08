let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');

const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");

let noSongsElement = container.querySelector(".no-songs");

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
  songsContainer.insertAdjacentHTML('beforeend', `
    <div class="song">
      <h4 class="song__artist">The Cars</h4>
      <p class="song__title">Drive</p>
      <button class="song__like"></button>
    </div>
  `);

  // Call renderAdded function after a song is added
  renderAdded();
}

// Fungsi untuk merender ulang tampilan setelah lagu ditambahkan atau dihapus
function renderAdded() {
  let songs = songsContainer.querySelectorAll(".song");
  // Jika tidak ada lagu dalam daftar
  if (songs.length === 0) {
    // Nonaktifkan tombol reset
    resetButton.setAttribute("disabled", true);
    // Tambahkan class untuk menandai tombol reset sebagai nonaktif
    resetButton.classList.add("form__submit-btn_disabled");
    // Tampilkan teks "Tidak ada lagu yang ditambahkan"
    noSongsElement.classList.remove("no-songs_hidden"); 
  } else {
    // Aktifkan tombol reset
    resetButton.removeAttribute("disabled");
    // Hapus class yang menandai tombol reset sebagai nonaktif
    resetButton.classList.remove("form__submit-btn_disabled");
    // Sembunyikan teks "Tidak ada lagu yang ditambahkan"
    noSongsElement.classList.add("no-songs_hidden"); 
  }
}

addButton.addEventListener('click', addSong);

// Call renderAdded function when the page is loaded
renderAdded();