'use strict';

var gElCanvas;
var gCtx;
var gCurrImgUrl;
var gCurrMemeLines;
var gTopTxtPos;
var gBottomTxtPos;
var gCenterTxtPos;
var gNumOfLines;
var gAddedThirdLine;
var gLastLine;

function initEditor() {
    gElCanvas = document.getElementById("my-canvas");
    gCtx = gElCanvas.getContext("2d");
    var elEditor = document.querySelector('.editor-container');
    elEditor.style.display = 'flex';
    var elGallery = document.querySelector('.image-container');
    elGallery.style.display = 'none';
    gCurrMemeLines = gMeme.lines[0];
    gCurrMemeLines.txt = '';
    gTopTxtPos = 50;
    gBottomTxtPos = 460;
    gCenterTxtPos = 265;
    gNumOfLines = 1;
    gAddedThirdLine = false;
    gLastLine = 0;
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
    renderedImg.onload = function () {
        gCtx.drawImage(renderedImg, 0, 0);
        gCtx.transform(1, 0, 0, -1, 0, gElCanvas)
        gCtx.fillStyle = `${gMeme.lines[0].color}`;
        gCtx.textAlign = `${gMeme.lines[0].align}`;
        gCtx.font = `bold ${gMeme.lines[0].size}px ${gMeme.lines[0].font}`;
        gCtx.fillText(gMeme.lines[0].txt, gElCanvas.width / 2, gTopTxtPos);
        gCtx.strokeText(gMeme.lines[0].txt, gElCanvas.width / 2, gTopTxtPos);
        gCtx.fillStyle = `${gMeme.lines[1].color}`;
        gCtx.textAlign = `${gMeme.lines[1].align}`;
        gCtx.font = `bold ${gMeme.lines[1].size}px ${gMeme.lines[1].font}`;
        gCtx.fillText(gMeme.lines[1].txt, gElCanvas.width / 2, gBottomTxtPos);
        gCtx.strokeText(gMeme.lines[1].txt, gElCanvas.width / 2, gBottomTxtPos);
        gCtx.fillStyle = `${gMeme.lines[2].color}`;
        gCtx.textAlign = `${gMeme.lines[2].align}`;
        gCtx.font = `bold ${gMeme.lines[2].size}px ${gMeme.lines[2].font}`;
        gCtx.fillText(gMeme.lines[2].txt, gElCanvas.width / 2, gCenterTxtPos);
        gCtx.strokeText(gMeme.lines[2].txt, gElCanvas.width / 2, gCenterTxtPos);
    }
    renderedImg.src = gCurrImgUrl;
}

function onChangeTxt(e) {
    var text = e.target.value;
    gCurrMemeLines.txt = text
    renderMeme();
    var elTxt = document.querySelector('.meme-text-input');
    elTxt.value = ''
}

function onChangeTxtColor() {
    const EL_COLOR_SELECTOR_VAL = document.querySelector('[name="txt-color"]').value;
    gCurrMemeLines.color = EL_COLOR_SELECTOR_VAL;
    renderMeme();
}

function onChangeTxtSize(size) {
    if (size === 'up') gCurrMemeLines.size += 3;
    else gCurrMemeLines.size -= 3;
    renderMeme();
}

function onSwitchLine() {
    if (gNumOfLines === 0) return;
    if (gNumOfLines === 2) {
        if (gLastLine === 0) {
            gCurrMemeLines = gMeme.lines[1];
            gLastLine = 1;
        }
        else {
            gCurrMemeLines = gMeme.lines[0];
            gLastLine = 0;

        }
    }
    else {
        if (!gAddedThirdLine) {
            if (gCurrMemeLines === gMeme.lines[0]) gLastLine = 0;
            else gLastLine = 1;
            gCurrMemeLines = gMeme.lines[2];
            gAddedThirdLine = true;

        }
        else {
            if (gCurrMemeLines === gMeme.lines[0] || gCurrMemeLines === gMeme.lines[1]) gCurrMemeLines = gMeme.lines[2];
            else if (gLastLine === 0) {
                gCurrMemeLines = gMeme.lines[1]
                gLastLine = 1;
            }
            else {
                gCurrMemeLines = gMeme.lines[0]
                gLastLine = 0;
            }
        }
    }
}

function onRaiseText() {
    if (gCurrMemeLines === gMeme.lines[0]) gTopTxtPos -= 3;
    else if (gCurrMemeLines === gMeme.lines[1]) gBottomTxtPos -= 3;
    else gCenterTxtPos -= 3;
    renderMeme();
}

function onLowerText() {
    if (gCurrMemeLines === gMeme.lines[0]) gTopTxtPos += 3;
    else if (gCurrMemeLines === gMeme.lines[1]) gBottomTxtPos += 3;
    else gCenterTxtPos += 3;
    renderMeme();
}

function onSetFont(font) {
    if (gCurrMemeLines === gMeme.lines[0]) gMeme.lines[0].font = font;
    else gMeme.lines[1].font = font;
    renderMeme();
}

function onTextAlign(align) {
    if (gCurrMemeLines === gMeme.lines[0]) gMeme.lines[0].align = align;
    else gMeme.lines[1].align = align;
    renderMeme();
}

function downloadMeme(link) {
    const DATA = gElCanvas.toDataURL();
    link.href = DATA;
    link.download = "YourMeme.jpg";
}

function onAddLine() {
    switch (gNumOfLines) {
        case 0:
            gNumOfLines = 1;
            break;
        case 1:
            gNumOfLines = 2;
            break;
        case 2:
            gNumOfLines = 3;
            break;
        case 3:
            return;
    }
    onSwitchLine();
}

function linesCountForRemove(){
    switch (gNumOfLines) {
        case 3:
            gNumOfLines = 2;
            break;
        case 2:
            gNumOfLines = 1;
            break;
        case 1:
            gNumOfLines = 0;
            break;
        case 0:
            return;
    }
}

function onRemoveLine() {
    if (gCurrMemeLines === gMeme.lines[0]) {
        gMeme.lines[0].txt = '';
        linesCountForRemove();
    }
    else if (gCurrMemeLines === gMeme.lines[1]) {
        gMeme.lines[1].txt = '';
        gNumOfLines = 2;
    }
    else {
        gMeme.lines[2].txt = '';
        gNumOfLines = 2;
        gAddedThirdLine = false;
        if (gLastLine === 0) gCurrMemeLines === gMeme.lines[1];
        else gCurrMemeLines === gMeme.lines[0];
    }
    renderMeme();
}

var text = document.getElementById("text-change");
text.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        onChangeTxt(e);
    }
});

