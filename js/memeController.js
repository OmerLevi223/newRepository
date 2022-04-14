'use strict'

var gElCanvas;
var gCtx;


function init() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
}


function renderMeme(id) {
    var img = new Image()
    img.src = gImgs[id - 1].url;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.font = '50px Impact';
    var x = 'white'
    gCtx.fillStyle = x;
    gCtx.strokeStyle = 'black';
}

function onAddLine(txt, lines, color, stroke, fontFamily, size) {
    // gCtx.font = `${gMeme.lines.size}px ${gMeme.lines.fontFamily}`;
    // console.log(gMeme.lines.size)
    // gCtx.fillStyle = gMeme.lines.color;
    // gCtx.strokeStyle = gMeme.lines.stroke;
    gCtx.font = `${size}px ${fontFamily}`
    gCtx.fillStyle = color
    gCtx.strokeStyle = stroke
    if (lines === 0) {
        gCtx.fillText(txt, 150, 100);
        gCtx.strokeText(txt, 150, 100);
    } else if (lines === 1) {
        gCtx.fillText(txt, 150, 600);
        gCtx.strokeText(txt, 150, 600);
    } else {
        gCtx.fillText(txt, 150, 300);
        gCtx.strokeText(txt, 150, 300);
    }
}

function onDeleteLine() {

}

function onSwitchLine() {
    switchLines()
}

function onColorPick(ev) {
    let index = gMeme.selectedLineIdx || 0
    gCtx.fillStyle = ev.target.value
    gMeme.lines[index].color = ev.target.value
    console.log(gMeme.lines[index].color)
}

function onIncreaseFont() {
}

function onDecreaseFont() {
}



// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }