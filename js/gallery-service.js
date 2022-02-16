'use strict';

function onImgSelect(imgId) {
    var selectedImg = gImgs.find(img => img.id === imgId);
    var selectedImgUrl = selectedImg.url;
    gCurrImgUrl = selectedImgUrl;
    renderMeme();
}

function getCurrImgUrl() {
    return gCurrImgUrl;
}

function getImages() {
    return gImgs;
}