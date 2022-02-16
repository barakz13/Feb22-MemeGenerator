'use strict';

var gElCanvas;
var gCtx;
var gCurrImgUrl;
var gCurrMemeLines;
var gTextPos;

function initEditor() {
    gElCanvas = document.getElementById("my-canvas");
    gCtx = gElCanvas.getContext("2d");
    createImages();
    gCurrImgUrl = gImgs[0].url;
    gCurrMemeLines = gMeme.lines[0];
    gTextPos = 30;
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
    var elBottomTxt = document.querySelector('.text-bottom');
    var elTopTxt = document.querySelector('.text-top');
    if (gCurrMemeLines === gMeme.lines[0]) {
        gCurrMemeLines = gMeme.lines[1];
        elBottomTxt.style.display = 'block';
        elTopTxt.style.display = 'none';
    }
    else {
        gCurrMemeLines = gMeme.lines[0];
        elBottomTxt.style.display = 'none';
        elTopTxt.style.display = 'block';
    }
    renderMeme();

}

