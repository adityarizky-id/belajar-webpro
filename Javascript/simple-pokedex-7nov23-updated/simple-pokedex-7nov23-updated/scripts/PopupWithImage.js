import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    buka(el) {
        super.buka();

        console.log('buka pop up with image')
        console.log(el)

        const viewImg = this._selectorPopup.querySelector('.view__img');
        const viewName = this._selectorPopup.querySelector('.view__name');

        viewImg.src = el.querySelector('.card__img').src;
        viewName.textContent = el.querySelector('.card__title').textContent;
    }

    
}