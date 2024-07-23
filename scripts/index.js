// @todo: Темплейт карточки
let cardTemplate = document.querySelector('#card-template');
// @todo: DOM узлы
let placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard({name, link}, deleteCard) {    
    let templateCopy = cardTemplate.content.cloneNode(true);
    console.log(templateCopy)
    templateCopy.querySelector('.card__image').src = link;
    templateCopy.querySelector('.card__title').innerHTML = name;
    templateCopy.querySelector('.card__delete-button').setAttribute('onclick', `deleteCard("${name}")`)
    return templateCopy;
}
// @todo: Функция удаления карточки
function deleteCard(name) {
    for(let child of placesList.children) {
        console.log('child:',child)
        if(child.querySelector('.card__title').innerHTML === name) child.remove();
    }

}

// @todo: Вывести карточки на страницу
for (let card of initialCards) {
    placesList.appendChild(addCard(card, deleteCard));
}