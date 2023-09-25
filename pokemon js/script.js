// let a= 10;
// const b = 20;

// a=20;
// b=30;
// variable
const container = document.querySelector('.container');
const txtInput = document.querySelector('.txtInput')
const btnKirim = document.querySelector('.btnKirim');

function defaultBtnState(inputValue) {
    if (inputValue.length === 0) {
        // add class ke button untuk disable
        btnKirim.disabled = true;
    }
    else {
        // remove class  ke button untuk disable
        btnKirim.disabled = false;
    }
    // btnKirim.disabled = inputValue.length === 0;
}

// initial state
defaultBtnState(txtInput.value);

txtInput.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const inputValue= e.target.value;

    // set kembali btn kirim
    defaultBtnState(inputValue)
})

btnKirim.addEventListener('click', function() {
    console.log('klik')
})

// function
function pokeball(title, index, description) {
    // const angka = 10;
    return `
    <div class="card">
        <h2 class="card__title">${title}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png" alt="image" class="card__img">
        <p class="card__description">
            ${description}
        </p>
    </div>
    `
}

// console.log(angka)

// kita bisa transformasi menjadi loop
const pokemon1 = pokeball(
    'Burbasaur', 
    1, 
    'Ini adalah Bulbasaur'
);
const pokemon2 = pokeball(
    'Venosaur',
    2,
    'Ini adalah Venosaur'
)
const pokemon3 = pokeball(
    'Ivysour',
    3,
    "ini adalah ivysour"
)
const pokemon4 = pokeball(
    'Diglet',
    50,
    'Ini adalah diglet'
)
// console.log(pokemon1, pokemon2, pokemon3)

// source data
const dataPokemon = [
    {
        title: 'Bulbasaur',
        index: 1,
        description: 'Ini adalah Bulbasaur'
    },
    {
        title: 'Venosaur',
        index: 2,
        description: 'Ini adalah Venosaur'
    },
    {
        title: 'Ivysour',
        index: 3,
        description: 'Ini adalah Ivysour'
    },
    {
        title: 'Charmander',
        index: 4,
        description: 'Ini adalah Charmander'
    },
    {
        title: 'Squirtel',
        index: 7,
        description: 'Ini adalah Squirtel'
    },
    {
        title: 'Diglet',
        index: 50,
        description: 'Ini adalah Diglet'
    },
    {
        title: 'Voltrob',
        index: 100,
        description: 'Ini adalah Voltrob'
    },
    {
        title: 'Pikachu',
        index: 25,
        description: 'Ini adalah Pikachu'
    }
];

// for untuk loop
console.log('loop')
let html = '';
for (let i = 0; i < dataPokemon.length; i++) {
    console.log(dataPokemon[i])
    // mengisi data pokemon ke dalam pokeball
    const ball = pokeball(
        dataPokemon[i].title,
        dataPokemon[i].index,
        dataPokemon[i].description
    )
    console.log(ball)
    html = html + ball;
}



// action
// container.innerHTML = pokemon1 + pokemon2 + pokemon3;
// container.innerHTML = `${pokemon1}${pokemon2}${pokemon3}${pokemon4}`
container.innerHTML = html;
// container.innerHTML = template(
//         'Pokemon 2',
//         2,
//         'deksripsi pokemon 2'
//     )

// container.append(template('a', 2, 'b'))
// ''
// ""
// ``
// const PHI = 3.14
// console.log('Nilai "Phi" adalah :' + PHI + ' !');
// console.log("Nilai 'Phi' adalah :" + PHI + " !");
// console.log(`Nilai 'phi' 
//     "adalah": ${PHI} !`)