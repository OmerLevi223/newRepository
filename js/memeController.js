'use strict'

var gElCanvas;
var gCtx;


function init() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    // resizeCanvas()
}


function renderMeme(){
    var elImg = document.querySelector('img');   //replace this with a getMeme function
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    // gCtx.textAlign = 'center';
    // gCtx.textBaseline = 'middle';
    gCtx.font = '50px Arial';
    gCtx.fillStyle = 'white';
    gCtx.strokeStyle = 'black';
    gCtx.fillText('Saving the context', 20, 100);
    // gCtx.strokeText('Saving the context', 20, 100);
}

// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }