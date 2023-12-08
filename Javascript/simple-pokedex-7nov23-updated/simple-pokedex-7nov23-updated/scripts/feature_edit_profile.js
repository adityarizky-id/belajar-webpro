const btnEdit = document.querySelector('.btn__edit');
const btnSaveEdit = document.querySelector('.btn_save-edit');

const popupEdit = document.querySelector('.popup__edit');

btnEdit.addEventListener('click', function() {
    console.log('btn edit')

    // toggle popup edit
    popupEdit.classList.toggle('popup--none')

    // inject data ke input text
    txtTrainerName.value = lblTrainerName.textContent;
    txtTrainerCity.value = lblTrainerCity.textContent;
});

btnSaveEdit.addEventListener('click', function() {
    // inject data ke label
    lblTrainerName.textContent = txtTrainerName.value;
    lblTrainerCity.textContent = txtTrainerCity.value;

    // menghilangkan popup edit
    popupEdit.classList.toggle('popup--none');
});