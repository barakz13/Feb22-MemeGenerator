'use strict';

var gElCanvas;
var gCtx;
var gCurrImgUrl;
var gTopTxtPos;
var gBottomTxtPos;
var gCenterTxtPos;
var gNumOfLines;
var gAddedThirdLine;
var gLastLine;
var gHorizontalPos;

function initEditor() {
  gElCanvas = document.getElementById('my-canvas');
  gCtx = gElCanvas.getContext('2d');
  var elEditor = document.querySelector('.editor-container');
  elEditor.style.display = 'flex';
  var elGallery = document.querySelector('.image-container');
  elGallery.style.display = 'none';
  gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].txt = '';
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

function renderMeme() {
  // const meme = getMeme()
  var renderedImg = new Image();
  renderedImg.onload = function () {
    gCtx.drawImage(renderedImg, 0, 0);
    gCtx.transform(1, 0, 0, -1, 0, gElCanvas);
    // meme.lines.forEach(line => {
    //     drawLine(line)
    // }
    gCtx.fillStyle = `${gMeme.lines[0].color}`;
    gCtx.textAlign = `${gMeme.lines[0].align}`;
    setHorizontalPos(gCtx.textAlign);
    gCtx.font = `bold ${gMeme.lines[0].size}px ${gMeme.lines[0].font}`;
    gCtx.fillText(gMeme.lines[0].txt, gHorizontalPos, gTopTxtPos);
    gCtx.strokeText(gMeme.lines[0].txt, gHorizontalPos, gTopTxtPos);
    gCtx.fillStyle = `${gMeme.lines[1].color}`;
    gCtx.textAlign = `${gMeme.lines[1].align}`;
    setHorizontalPos(gCtx.textAlign);
    gCtx.font = `bold ${gMeme.lines[1].size}px ${gMeme.lines[1].font}`;
    gCtx.fillText(gMeme.lines[1].txt, gHorizontalPos, gBottomTxtPos);
    gCtx.strokeText(gMeme.lines[1].txt, gHorizontalPos, gBottomTxtPos);
    gCtx.fillStyle = `${gMeme.lines[2].color}`;
    gCtx.textAlign = `${gMeme.lines[2].align}`;
    setHorizontalPos(gCtx.textAlign);
    gCtx.font = `bold ${gMeme.lines[2].size}px ${gMeme.lines[2].font}`;
    gCtx.fillText(gMeme.lines[2].txt, gHorizontalPos, gCenterTxtPos);
    gCtx.strokeText(gMeme.lines[2].txt, gHorizontalPos, gCenterTxtPos);
  };
  renderedImg.src = gCurrImgUrl;
}

function setHorizontalPos(pos) {
  if (pos === 'left') gHorizontalPos = 25;
  if (pos === 'center') gHorizontalPos = 250;
  if (pos === 'right') gHorizontalPos = 475;
}

function onChangeTxt(e) {
  var elTxt = document.querySelector('.meme-text-input');
  var text = elTxt.value;
  if (text === '') {
    elTxt.focus();
    return;
  }
  gMeme.lines[gMeme.selectedLineIdx].txt = text;
  renderMeme();
  elTxt.value = '';
  elTxt.focus();
}

function onChangeTxtColor() {
  const EL_COLOR_SELECTOR_VAL =
    document.querySelector('[name="txt-color"]').value;
  gMeme.lines[gMeme.selectedLineIdx].color = EL_COLOR_SELECTOR_VAL;
  renderMeme();
}

function onChangeTxtSize(size) {
  if (size === 'up') gMeme.lines[gMeme.selectedLineIdx].size += 3;
  else gMeme.lines[gMeme.selectedLineIdx].size -= 3;
  renderMeme();
}

function countNumOfLines() {
  if (
    gMeme.lines[0].txt === '' &&
    gMeme.lines[1].txt === '' &&
    gMeme.lines[2].txt === ''
  ) {
    gNumOfLines = 1;
    return;
  }
  if (
    (gMeme.lines[0].txt === '' && gMeme.lines[1].txt === '') ||
    (gMeme.lines[1].txt === '' && gMeme.lines[2].txt === '') ||
    (gMeme.lines[2].txt === '' && gMeme.lines[0].txt === '')
  ) {
    gNumOfLines = 2;
    return;
  }
  gNumOfLines = 3;
}

function onSwitchLine() {
  if (gNumOfLines === 1) {
    gLastLine = gMeme.selectedLineIdx;
    return;
  }
  countNumOfLines();
  if (gNumOfLines === 2) {
    if (!gAddedThirdLine) {
      if (gLastLine === 0) {
        gMeme.selectedLineIdx = 1;
        gLastLine = 1;
      } else {
        gMeme.selectedLineIdx = 0;
        gLastLine = 0;
      }
    }
  } else {
    if (!gAddedThirdLine) {
      if (gMeme.selectedLineIdx === 0) gLastLine = 0;
      else gLastLine = 1;
      gMeme.selectedLineIdx = 2;
      gAddedThirdLine = true;
    } else {
      if (gMeme.selectedLineIdx === 0 || gMeme.selectedLineIdx === 1)
        gMeme.selectedLineIdx = 2;
      else if (gLastLine === 0) {
        gMeme.selectedLineIdx = 1;
        gLastLine = 1;
      } else {
        gMeme.selectedLineIdx = 0;
        gLastLine = 0;
      }
    }
  }
}

function onRaiseText() {
  if (gMeme.selectedLineIdx === 0) gTopTxtPos -= 3;
  else if (gMeme.selectedLineIdx === 1) gBottomTxtPos -= 3;
  else gCenterTxtPos -= 3;
  renderMeme();
}

function onLowerText() {
  if (gMeme.selectedLineIdx === 0) gTopTxtPos += 3;
  else if (gMeme.selectedLineIdx === 1) gBottomTxtPos += 3;
  else gCenterTxtPos += 3;
  renderMeme();
}

function onSetFont(font) {
  if (gMeme.selectedLineIdx === 0) gMeme.lines[0].font = font;
  if (gMeme.selectedLineIdx === 1) gMeme.lines[1].font = font;
  if (gMeme.selectedLineIdx === 2) gMeme.lines[2].font = font;
  renderMeme();
}

function onTextAlign(align) {
  if (gMeme.selectedLineIdx === 0) gMeme.lines[0].align = align;
  if (gMeme.selectedLineIdx === 1) gMeme.lines[1].align = align;
  if (gMeme.selectedLineIdx === 2) gMeme.lines[2].align = align;
  renderMeme();
}

function downloadMeme(link) {
  const DATA = gElCanvas.toDataURL();
  link.href = DATA;
  link.download = 'YourMeme.jpg';
}

function onAddLine() {
  switch (gNumOfLines) {
    case 1:
      gNumOfLines = 2;
      break;
    case 2:
      gNumOfLines = 3;
      gAddedThirdLine = true;
      break;
    case 3:
      return;
  }
  onSwitchLine();
}

function checkIfSingleLine() {
  if (gMeme.selectedLineIdx === 0) {
    if (gMeme.lines[1].txt === '' && gMeme.lines[2].txt === '') {
      return true;
    } else {
      return false;
    }
  }
  if (gMeme.selectedLineIdx === 1) {
    if (gMeme.lines[0].txt === '' && gMeme.lines[2].txt === '') {
      return true;
    } else {
      return false;
    }
  }
  if (gMeme.selectedLineIdx === 2) {
    if (gMeme.lines[0].txt === '' && gMeme.lines[1].txt === '') {
      return true;
    } else {
      return false;
    }
  }
}

// function onAddLine() {

// }

function linesCountForRemove() {
  switch (gNumOfLines) {
    case 3:
      gNumOfLines = 2;
      gAddedThirdLine = false;
      break;
    case 2:
      gNumOfLines = 1;
      break;
    case 1:
      return;
  }
}

function onRemoveLine() {
  if (gMeme.selectedLineIdx === 0) {
    gMeme.lines[0].txt = '';
    if (checkIfSingleLine()) {
      linesCountForRemove();
      onSwitchLine();
    }
  }
  if (gMeme.selectedLineIdx === 1) {
    gMeme.lines[1].txt = '';
    if (checkIfSingleLine()) {
      linesCountForRemove();
      onSwitchLine();
    }
  }
  if (gMeme.selectedLineIdx === 2) {
    gMeme.lines[2].txt = '';
    if (checkIfSingleLine()) {
      linesCountForRemove();
      onSwitchLine();
    }
  }
  renderMeme();
}

var text = document.getElementById('text-change');
text.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    onChangeTxt(e);
  }
});
