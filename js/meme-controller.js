'use strict';

var gElCanvas;
var gCtx;
var gCurrImgUrl;

function init() {
    gElCanvas = document.getElementById("my-canvas");
    gCtx = gElCanvas.getContext("2d");
    createImages();
    gCurrImgUrl = gImgs[0].url;
    renderMeme();
    renderGallery();
}

function getImages() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

// function renderImg() {
//     var imgForRender = new Image();
//     imgForRender.src = gImgs[0].url;
//     imgForRender.onload = function () {
//         gCtx.drawImage(imgForRender, 0, 0);
//     }
// }

// function renderTxt() {
//     var currMemeLines = gMeme.lines[0];
//     console.log(gMeme.lines[0]);
//     gCtx.fillStyle = `${currMemeLines.color}`;
//     gCtx.textAlign = `${currMemeLines.align}`;
//     gCtx.font = `bold ${currMemeLines.size}px Impact`;
//     gCtx.fillText(currMemeLines.txt, gElCanvas.width / 2, 30);
//     gCtx.strokeText(currMemeLines.txt, gElCanvas.width / 2, 30);
//     console.log(gCtx)
// }

function renderMeme() {
    var renderedImg = new Image();
    renderedImg.src = gCurrImgUrl;
    var currMemeLines = gMeme.lines[0];
    renderedImg.onload = function () {
        gCtx.drawImage(renderedImg, 0, 0);
        gCtx.fillStyle = `${currMemeLines.color}`;
        gCtx.textAlign = `${currMemeLines.align}`;
        gCtx.font = `bold ${currMemeLines.size}px Impact`;
        gCtx.fillText(currMemeLines.txt, gElCanvas.width / 2, 30);
        gCtx.strokeText(currMemeLines.txt, gElCanvas.width / 2, 30);
    }
}

function onChangeTxt() {
    setLineTxt();
    renderMeme();
    var elTxt = document.querySelector('.meme-text-input');
    elTxt.value = '';
}

