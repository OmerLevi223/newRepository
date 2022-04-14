'use strict'

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: null,
    lines: []
}

function getMeme(id) {
    gMeme = {
        selectedImgId: id,
        selectedLineIdx: null,
        lines: []
    }
    document.querySelector('.gallery').classList = 'gallery hidden'
    document.querySelector('.canvas-page').classList = 'canvas-page'
    renderMeme(id)
}

function switchLines() {
    if (!gMeme.lines.length) return
    if (!gMeme.selectedLineIdx || gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 1
    } else {
        gMeme.selectedLineIdx++
    }
    console.log(gMeme.selectedLineIdx)
}

function setColorText(meme){
    if (!meme.line) {
        
    }
}
function setLineTxt() {
    const textLineInputValue = document.querySelector('[name="line-text"]')
    gMeme.lines.push({
        txt: textLineInputValue.value,
        size: 50,
        fontFamily: 'Impact',
        color: 'white',
        stroke: 'black',
        marked: false
    })
    onAddLine( gMeme.lines[length-1].txt, gMeme.lines.length, gMeme.lines[length-1].color, gMeme.lines[length-1].stroke, gMeme.lines[length-1].fontFamily, gMeme.lines[length-1].fontFamily, gMeme.lines[length-1].size)
    textLineInputValue.value = ''
    console.log(gMeme)
}

function addLine() {
    const textLineInputValue = document.querySelector('[name="line-text"]')
    onAddLine(textLineInputValue.value, gMeme.lines.length)
    gMeme.lines.push({
        txt: textLineInputValue.value,
        size: 50,
        fontFamily: 'Impact',
        color: 'white',
        stroke: 'black',
        marked: false
    })
    console.log( gMeme.lines)
    textLineInputValue.value = ''
}

function deleteLine() {

}

