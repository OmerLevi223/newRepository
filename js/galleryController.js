'use strict'




function renderGallery(imgs) {
    var strHTML = ''
    for (var i = 1; i <= imgs.length; i++) {
        strHTML += `<img data-id="${i}" onclick="CreatNewMeme(${i})" src="img/${i}.jpg"/>`
    }
    var elGallery = document.querySelector('.gallery-imgs')
    elGallery.innerHTML = strHTML
}

