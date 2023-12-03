let year = 96;

if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
    console.log(year + ' adalah tahun kabisat.');
} else {
    console.log(year + ' adalah tahun non-kabisat.');
}

// - logging (dubuging)
console.log('Hello World! Aku Belajar JavaScript.');
// -  variable
let firstName = 'John'; 
var lastName = 'Doe';
const age = 20;

console.log(firstName, lastName, age);

angka = 10 * 2;
nama = lastName + ' ' + 'Daeng';

console.log(nama);
console.warn('Ini adalah warning!');

angka = angka + 1;

// logic
if (angka > 10) {
    console.log('Angka lebih besar dari 10.');
} else if (angka === 10) {
    console.log('Angka sama dengan 10.');
} else {    
    console.log('Angka lebih kecil dari 10.');
}

console.log(angka);

// register button dan text
const btnTombol = document.querySelector('#btnTombol');
const txtName = document.querySelector('.txtName');

// menambahkan event listener ke button
let toggle = true;
console.log('toggle default: ${toggle}');
btnTombol.addEventListener('click', function() {
    console.log('Tombol di klik!');
    if (toggle === true) {
        toggle = false;
        //add class untuk bg
        txtName.classList.add('bg-yellow');
        txtName.textContent = 'tombol di klik!';
    } else {
        toggle = true;
        txtName.classList.remove('bg-yellow');
        txtName.textContent = 'tombol off!';
    }
});

// show popup
const btnShowPopup = document.querySelector('#btnShowPopup');
const containerPopup = document.querySelector('.popup');
const containerPage = document.querySelector('.page');
let showPopup = false;

// add event click ke tombol show popup
btnShowPopup.addEventListener('click', function(){
    console.log('tombol show popup di klik!');
    // logic untuk show/hide popup
    if (showPopup === true) {
        //remove class popup--hide
        containerPopup.classList.remove('popup--hide');
        containerPage.classList.add('.blur')
        showPopup = false;
    }
    else {
        //add class popup--hide
        containerPopup.classList.add('popup--hide');
        containerPage.classList.remove('.blur');
        showPopup = true;
    }
})