'use strict'
const SAVED_MEMS = 'Saved-Mems'
let gSavedMemes = loadFromStorage(SAVED_MEMS) ?? []

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
    return gMeme
}


function setLineSize() {
    let lineSize = 50
    return lineSize
}

function saveMeme(memeUrl) {
    gSavedMemes.push(memeUrl);
    saveToStorage(SAVED_MEMS, gSavedMemes);
}


function addLine(txt) {

    gMeme.lines.push({
        txt,
        align: 'center',
        color: document.querySelector('[name="color-font"]').value ?? gCtx.fillStyle,
        stroke: document.querySelector('[name="color-stroke"]').value ?? gCtx.strokeStyle,
        font: document.querySelector('[name="fonts"]').value ?? gCtx.font.slice(gCtx.font.indexOf('px') + 2),
    })
    drawLine(gMeme.lines[gMeme.lines.length - 1], gMeme.lines.length)
}

function alignText(pos) {
    if (gMeme.selectedLineIdx) {
        gMeme.lines[gMeme.selectedLineIdx - 1].align = pos
        renderMeme(gMeme)
    }
}


function deleteLine(idx) {
    gMeme.lines.splice(idx, 1)
}

function switchLines() {
    if (!gMeme.lines.length) return
    if (!gMeme.selectedLineIdx || gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 1
    } else {
        gMeme.selectedLineIdx++
    }
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx - 1, 1)
    console.log(gMeme.lines)
}

