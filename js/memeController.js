'use strict'

var gElCanvas;
var gCtx;
var gNewMeme;
var gIndex

function init() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = 'black'
    gCtx.font = '50px impact'
    gCtx.textAlign='left';
    renderGallery(gImgs)
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme(gNewMeme)
    })
    console.log(gCtx.font)
}

function CreatNewMeme(id) {
    gNewMeme = getMeme(id)
    document.querySelector('.gallery').classList = 'gallery hidden'
    document.querySelector('.canvas-page').classList = 'canvas-page'
    // addMouseListeners()
    // addTouchListeners()
    resizeCanvas()
    renderMeme(gNewMeme)
}

function renderMeme(gNewMeme) {
    const img = new Image()
    img.src = chooseImg(gNewMeme.selectedImgId)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    gNewMeme.lines.forEach((line, index) => {
        drawLine(line, index + 1)
    })
}


function onAddLine() {
    const textLineInputValue = document.querySelector('[name="line-text"]')  
    addLine(textLineInputValue.value)
    textLineInputValue.value = ''
}


function drawLine(line, index) {
    gCtx.font = `${line.size ?? 50}px ${line.font ?? ' impact'}`
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.stroke;
    gCtx.lineWidth = 1;
    const positions={
        left: gElCanvas.width * 0.1,
        center: gElCanvas.width/2,
        right: gElCanvas.width * 0.9
    }
    if(line.align === 'left'){
        gCtx.textAlign = 'start'
    } else if(line.align === 'center'){
        gCtx.textAlign = 'center'
    } else{
        gCtx.textAlign = 'end'
    }
    if (index === gNewMeme.selectedLineIdx) {
        gCtx.lineWidth = 4;
    }
    if (!line.txt) return
    if (index === 1) {
        gCtx.fillText(line.txt, positions[line.align], gElCanvas.height * 0.1);
        gCtx.strokeText(line.txt, positions[line.align], gElCanvas.height * 0.1);
    } else if (index === 2) {
        gCtx.fillText(line.txt, positions[line.align], gElCanvas.height * 0.9);
        gCtx.strokeText(line.txt, positions[line.align], gElCanvas.height * 0.9);
    } else {
        gCtx.fillText(line.txt, positions[line.align], gElCanvas.height / 2);
        gCtx.strokeText(line.txt, positions[line.align], gElCanvas.height / 2);
    }
}

function onDeleteLine() {
    deleteLine()
    renderMeme(gNewMeme)
}

function onSwitchLine() {
    switchLines()
    renderMeme(gNewMeme)
}

function onIncreaseFont() {
    changeFontSize(2)
}

function onDecreaseFont() {
    changeFontSize(-2)
}

function changeFontSize(diff) {
    if (!gMeme.selectedLineIdx) {
        let newFontSize = +gCtx.font.slice(0, gCtx.font.indexOf('px')) + diff
        let newFontName = gCtx.font.slice(gCtx.font.indexOf('px') + 2)
        gCtx.font = `${newFontSize}px ${newFontName}`
    } else {
        let lineSize = gNewMeme.lines[gMeme.selectedLineIdx - 1].size
        gNewMeme.lines[gMeme.selectedLineIdx - 1].size = lineSize ? lineSize + diff : +gCtx.font.slice(0, gCtx.font.indexOf('px')) + diff
        renderMeme(gNewMeme)
    }
}

function onChangeFontFamily(ev) {
    if (!gMeme.selectedLineIdx) {
        gCtx.font = `${gCtx.font.slice(0, gCtx.font.indexOf('px'))}px ${ev.target.value}`
    } else {
        gNewMeme.lines[gMeme.selectedLineIdx - 1].font = ev.target.value
        renderMeme(gNewMeme)
    }
}

function onColorPick(ev) {
    if (!gMeme.selectedLineIdx) {
        gCtx.fillStyle = ev.target.value
    } else {
        gNewMeme.lines[gMeme.selectedLineIdx - 1].color = ev.target.value
        renderMeme(gNewMeme)
    }
}

function onColorStrokePick(ev){
    if (!gMeme.selectedLineIdx) {
        gCtx.strokeStyle = ev.target.value
    } else {
        gNewMeme.lines[gMeme.selectedLineIdx - 1].stroke = ev.target.value
        renderMeme(gNewMeme)
    }
}


function onAlignLeft(){
    alignText('left')
}

function onAlignCenter(){
    alignText('center')
}

function onAlignRight(){
    alignText('right')
}

function onSaveMeme(){
    gNewMeme.selectedLineIdx= null
    renderMeme(gNewMeme)
    const memeUrl = gElCanvas.toDataURL('image/jpeg')
    saveMeme(memeUrl)
}

function onShareMeme(){
    gNewMeme.selectedLineIdx= null
    renderMeme(gNewMeme)
    uploadImg()
}

function onDownloadMeme(elLink){
    gNewMeme.selectedLineIdx= null
    renderMeme(gNewMeme)
    downloadCanvas(elLink)
}

function onGetSaveMemes(){
    document.querySelector('.gallery').classList = 'gallery hidden'
    document.querySelector('.canvas-page').classList = 'canvas-page hidden'
    document.querySelector('.saved-memes').classList = 'saved-memes'
    loadSavedMemes()
    onDeactivateMenu()
}

function onGetGallery(){
    document.querySelector('.gallery').classList = 'gallery'
    document.querySelector('.canvas-page').classList = 'canvas-page hidden'
    document.querySelector('.saved-memes').classList = 'saved-memes hidden'
    onDeactivateMenu()
}


function resizeCanvas() {
   const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth > 500 ? 500 : elContainer.offsetWidth 
    gElCanvas.height = elContainer.offsetWidth > 500 ? 500 : elContainer.offsetWidth 
}
