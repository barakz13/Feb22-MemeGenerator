'use strict';

function onImgSelect(imgId) {
    var selectedImg = gImgs.find(img => img.id === imgId);
    var selectedImgUrl = selectedImg.url;
    gCurrImgUrl = selectedImgUrl;
    renderMeme();
}

function createImages() {
    gImgs = [
        createImg(1, 'img/1.jpg', ['donald', 'trump']),
        createImg(2, 'img/2.jpg', ['dog', 'kiss']),
        createImg(3, 'img/3.jpg', ['dog', 'baby']),
    ]
}

function createImg(id, url, keywords) {
    var img = {
        id: id,
        url: url,
        keywords: keywords
    };
    return img;
}


function getCurrImgUrl() {
    return gCurrImgUrl;
}

function getImages() {
    return gImgs;
}