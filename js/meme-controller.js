'use strict';

var gElCanvas;
var gCtx;
var gCurrImgUrl;
var gCurrMemeLines;
var gTextPos;

function initEditor() {
    gElCanvas = document.getElementById("my-canvas");
    gCtx = gElCanvas.getContext("2d");
    var elEditor = document.querySelector('.editor-container');
    elEditor.style.display = 'flex';
    var elGallery = document.querySelector('.image-container');
    elGallery.style.display = 'none';
    var elMainContainer = document.querySelector('.main-container');
    elMainContainer.style.height = '546px';
    elMainContainer.style.marginTop = '25px';
    var elMainLayout = document.querySelector('.main-layout');
    elMainLayout.style.height = '640px';
    gCurrMemeLines = gMeme.lines[0];
    gCurrMemeLines.txt = '';
    gTextPos = 30;
    renderMeme();
}

function getImages() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function renderMeme() {
    var renderedImg = new Image();
    renderedImg.src = gCurrImgUrl;
    renderedImg.onload = function () {
        gCtx.drawImage(renderedImg, 0, 0);
        gCtx.fillStyle = `${gMeme.lines[0].color}`;
        gCtx.textAlign = `${gMeme.lines[0].align}`;
        gCtx.font = `bold ${gMeme.lines[0].size}px Impact`;
        gCtx.fillText(gMeme.lines[0].txt, gElCanvas.width / 2, 30);
        gCtx.strokeText(gMeme.lines[0].txt, gElCanvas.width / 2, 30);
        gCtx.fillStyle = `${gMeme.lines[1].color}`;
        gCtx.textAlign = `${gMeme.lines[1].align}`;
        gCtx.font = `bold ${gMeme.lines[1].size}px Impact`;
        gCtx.fillText(gMeme.lines[1].txt, gElCanvas.width / 2, 470);
        gCtx.strokeText(gMeme.lines[1].txt, gElCanvas.width / 2, 470);
    }
}

function onChangeTxt() {
    setLineTxt();
    renderMeme();
    var elTxt = document.querySelector('.meme-text-input');
    elTxt.value = ''
}

function onChangeTxtColor() {
    const EL_COLOR_SELECTOR_VAL = document.querySelector('[name="txt-color"]').value;
    gCurrMemeLines.color = EL_COLOR_SELECTOR_VAL;
    renderMeme();
}

function onChangeTxtSize() {
    const EL_SIZE_SELECTOR_VAL = document.querySelector('[name="txt-size"]').value
    gCurrMemeLines.size = EL_SIZE_SELECTOR_VAL;
    renderMeme();
}

function onSwitchLine() {
    if (gCurrMemeLines === gMeme.lines[0]) gCurrMemeLines = gMeme.lines[1];
    else gCurrMemeLines = gMeme.lines[0];
    renderMeme();
}

