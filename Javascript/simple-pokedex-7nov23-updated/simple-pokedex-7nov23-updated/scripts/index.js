import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';

// Section 1: deklarasi variable
// -------------------------------
const btnEdit = document.querySelector('.btn__edit');
const btnTambah = document.querySelector('.btn__tambah');


const popupEdit = document.querySelector('.popup__edit');
const popupAddPokemon = document.querySelector('.popup__add-pokemon');

const lblTrainerName = document.querySelector('.trainer__name');
const lblTrainerCity = document.querySelector('.trainer__city');

const txtTrainerName = document.querySelector('.input--trainer__name');
const txtTrainerCity = document.querySelector('.input--trainer__city');

const txtPokemonName = document.querySelector('.input--pokemon-name');
const txtPokemonIdx = document.querySelector('.input--pokemon-idx');
const txtPokemonDesc = document.querySelector('.input--pokemon-desc');

const container = document.querySelector('.container');

const popupView = document.querySelector('.popup__view');
const btnCloseView = document.querySelector('.view__btn--close');

// const viewImg = document.querySelector('.view__img');
// const viewName = document.querySelector('.view__name');
// const myCard = document.querySelector('.my__card');
// const btnSaveAdd = document.querySelector('.btn_save-add');
// const btnSaveEdit = document.querySelector('.btn_save-edit');

// Source of data
// array of object
const pokedex = [
    {
        pokemon_name: 'Bulbasaur',
        pokemon_idx: 1,
        pokemon_desc: 'Deskripsi Bulbasaur'        
    },
    {
        pokemon_name: 'Charmander',
        pokemon_idx: 4,
        pokemon_desc: 'Deskripsi Charmander'        
    },
    {
        pokemon_name: 'Pikachu',
        pokemon_idx: 25,
        pokemon_desc: 'Deskripsi Pikachu'        
    }
]


// Section 2: pembuatan fungsi
// -------------------------------

// Fungsi Edit Profile
// untuk mengubah profile dari trainer

function handleEditProfile() {
    console.log('handle edit profile');

    lblTrainerName.textContent = editProfilePopup.getFormValue('.input--trainer__name')
    // txtTrainerName.value;
    lblTrainerCity.textContent = editProfilePopup.getFormValue('.input--trainer__city')
    // txtTrainerCity.value;

    // menghilangkan popup edit
    // popupEdit.classList.toggle('popup--none');
    editProfilePopup.tutup()
}
const editProfilePopup = new PopupWithForm(popupEdit, handleEditProfile);

function editProfile() {
    console.log('btn edit')

    // toggle popup edit
    // popupEdit.classList.toggle('popup--none')
    editProfilePopup.buka();
    editProfilePopup.setEventListener('.btn_save-edit');

    // inject data ke input text
    txtTrainerName.value = lblTrainerName.textContent;
    txtTrainerCity.value = lblTrainerCity.textContent;
}

// Section 3: mendaftar event-listener
// -------------------------------
btnEdit.addEventListener('click', editProfile);


function handleAddPokemon() {
    console.log('handle add pokemon');

    const pokemonName = addPokemonPopup.getFormValue('.input--pokemon-name')
    // txtPokemonName.value;
    const pokemonIdx = addPokemonPopup.getFormValue('.input--pokemon-idx')
    // txtPokemonIdx.value;
    const pokemonDesc = addPokemonPopup.getFormValue('.input--pokemon-desc')
    // txtPokemonDesc.value;

    // - validation
    if (pokemonName.length === 0) {
        // popupAddPokemon.classList.toggle('popup--none');
        alert('Nama Pokemon harus diisi!')
        return false;
    }

    if (pokemonIdx === '') {
        alert('Pokemon index harus diisi!')
        return false;
    }

    if (!pokemonDesc.length) {
        alert('Pokemon Description harus diisi');
        return false;
    }

    // - validate data pernah ada
    const findPokemon = pokedex.find((x) => x.pokemon_idx == pokemonIdx);
    console.log(findPokemon)
    if (findPokemon !== undefined) {
        alert(`pokemon: ${findPokemon.pokemon_name}, sudah terdaftar!`)
        return false;
    }

    console.log(`
        Pokemon Name: ${pokemonName},
        Pokemon Idx: ${pokemonIdx},
        Pokemon Desc: ${pokemonDesc}
    `);
    const photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIdx}.png`;
    const pokemonData = {
        name: pokemonName,
        photo,
        description: pokemonDesc
    }
    const card = new Card(pokemonData, '.my__card');
    container.append(card.createCard());

    // clean
    txtPokemonName.value = '';
    txtPokemonIdx.value = '';
    txtPokemonDesc.value = '';

    // toggle popup add pokemon
    // popupAddPokemon.classList.toggle('popup--none');
    addPokemonPopup.tutup();

}
const addPokemonPopup = new PopupWithForm(popupAddPokemon, handleAddPokemon);
btnTambah.addEventListener('click', function() {
    console.log('tombol tambah')

    // toggle popup add pokemon
    // popupAddPokemon.classList.toggle('popup--none');
    addPokemonPopup.buka();
    addPokemonPopup.setEventListener('.btn_save-add')
});

btnCloseView.addEventListener('click', function() {

    popupView.classList.toggle('popup--none')
})


// --------
// inisialisasi

pokedex.forEach((pokemon) => {
    console.log(pokemon)

    // descrtructor
    const { pokemon_name, pokemon_idx, pokemon_desc } = pokemon;

    const photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_idx}.png`;

    // panggil class Card
    const pokemonData = {
        name: pokemon_name,
        // karena nama key dan value sama, bisa langsung
        photo,
        description: pokemon_desc
    };
    const card = new Card(
        pokemonData,
        '.my__card'
    );
    console.log(card)
    const cloneContent = card.createCard();

    // isi data data pokemon kirim ke card
    container.append(cloneContent)
})

// Todo
// class Popup
// PoupWithForm 
// . edit profile
// . add pokemon