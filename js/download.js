'use strict'

function downloadCanvas(elLink) {
    gMeme.selectedLineIdx= null
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'new-meme.jpg'
}