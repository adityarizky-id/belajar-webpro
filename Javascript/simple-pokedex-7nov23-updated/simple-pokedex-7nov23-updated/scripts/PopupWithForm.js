import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(selectorPopup, handleSubmit) {
        super(selectorPopup);
        this._handleSubmit = handleSubmit;
    }

    getFormValue(inputSelector) {
       return document.querySelector(inputSelector).value;
    }

    setEventListener(btnSave) {
        console.log('event listener')

        const popupForm = this._selectorPopup.querySelector(btnSave);
        popupForm.addEventListener('click', this._handleSubmit);
    }
}