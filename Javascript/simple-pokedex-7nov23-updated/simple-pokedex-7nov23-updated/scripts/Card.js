import PopupWithImage from "./PopupWithImage.js";

export default class Card {
    // attribute
    // # -> private
    // _ -> inheritance
    #name;
    #photo;
    #description;
    #selectorTemplate;

    // name, photo, description
    constructor (pokemonData, selectorTemplate) {
        const { name, photo, description } = pokemonData;
        this.#name = name;
        this.#photo = photo;
        this.#description = description;
        this.#selectorTemplate = selectorTemplate;
    }

    _createTemplate() {
        const cloneContent = document.querySelector(this.#selectorTemplate)
            .content
            .cloneNode(true);
        return cloneContent;
    }

    _setEventListener(el, eventType, methodEvent) {
        el.addEventListener(eventType, methodEvent);
    }

    createCard() {
        const cloneContent = this._createTemplate();
        const cardTitle = cloneContent.querySelector('.card__title');
        const cardImg = cloneContent.querySelector('.card__img');
        const cardDesc = cloneContent.querySelector('.card__description');

        // ambil dari attribute
        cardTitle.textContent = this.#name;
        cardImg.src = this.#photo;
        cardDesc.textContent = this.#description;

        // 3 listener
        // star
        this._setEventListener(
            cloneContent.querySelector('.card__star'),
            'click',
            this._handleLike
        )
        // delete
        this._setEventListener(
            cloneContent.querySelector('.card__trash'),
            'click',
            this._handleDelete
        )
        // show card
        this._setEventListener(
            cloneContent.querySelector('.card__img'),
            'click',
            this._handleShowCard
        )

        return cloneContent;
    }

    _handleLike(event) {
        console.log(event.target)
        const star = event.target;
        star.classList.add('fa-solid');
    }

    _handleDelete(event) {
        console.log(event.target.parentElement)

        event.target.closest('.card').remove();
    }

    _handleShowCard(event) {
        // console.log(event.target.parentElement)
        const el = event.target.parentElement;

        const popupView = document.querySelector('.popup__view');

        // panggil class popup
        const popupImage = new PopupWithImage(popupView);
        popupImage.buka(el)

        // popupView.classList.toggle('popup--none'); -> super.buka()

        // const viewImg = popupView.querySelector('.view__img');
        // const viewName = popupView.querySelector('.view__name');

        // viewImg.src = el.querySelector('.card__img').src;
        // viewName.textContent = el.querySelector('.card__title').textContent;
    }

}