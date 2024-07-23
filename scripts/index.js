// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function creatCard({name, link}, deleteCard) {    
    const templateCopy = cardTemplate.content.cloneNode(true);
    console.log(templateCopy)
    templateCopy.querySelector('.card__image').src = link;
    templateCopy.querySelector('.card__image').alt = `Фото ${name}`;
    templateCopy.querySelector('.card__title').textContent = name;
    templateCopy.querySelector('.card__delete-button').addEventListener('click', deleteCard)

    return templateCopy;
}
// @todo: Функция удаления карточки
function deleteCard(event) {
    event.target.closest('.places__item.card').remove()
}

// @todo: Вывести карточки на страницу
for (let card of initialCards) {
    placesList.appendChild(creatCard(card, deleteCard));
}