'use strict';

function renderGallery() {
    var renderedImages = gImgs.map((img) => {
        return `<img src=${img.url} onclick="onImgSelect(${img.id})">`;
    })
    var elGallery = document.querySelector(".gallery");
    elGallery.innerHTML = renderedImages.join('');
}

function getImages() {
    return gImgs;
}




