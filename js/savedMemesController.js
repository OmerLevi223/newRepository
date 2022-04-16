'use strict'

function loadSavedMemes(){
    let strHTML = ''
    let savedMemes = loadFromStorage(SAVED_MEMS)
    savedMemes.forEach((memeUrl) => {
        strHTML+= `<img class="saved-meme" src="${memeUrl}"/>`
    })
    var elSavedMemes = document.querySelector('.saved-memes')
    elSavedMemes.innerHTML = strHTML
}

function onActivateMenu(){
    document.querySelector('.nav-mobile').classList = 'nav-mobile nav-mobile-container-shown'
}

function onDeactivateMenu(){
    document.querySelector('.nav-mobile').classList = 'nav-mobile nav-mobile-container-hidden'
}