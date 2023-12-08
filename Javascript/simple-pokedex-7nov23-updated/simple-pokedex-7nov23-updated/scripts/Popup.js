// 3 jenis popup
// 1 edit profile (panggil nama class) (popup__edit)
// 1 add pokemon (panggil nama class) (popup__add-pokemon)
// 1 show image (panggil nama class) (popup__view)


// class Popup

export default class Popup  {
    
    constructor(selectorPopup) {
        this._selectorPopup = selectorPopup;
    }

    buka() {
        console.log('buka')
        this._selectorPopup.classList.remove('popup--none')
    }

    tutup() {
        console.log('tutup')
        this._selectorPopup.classList.add('popup--none');
    }

}