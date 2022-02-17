'use strict';


function initGallery() {
    var elEditor = document.querySelector('.editor-container');
    elEditor.style.display = 'none';
    var elGallery = document.querySelector('.image-container');
    elGallery.style.display = 'block';
    var elMainContainer = document.querySelector('.main-container');
    elMainContainer.style.height = '566px';
    elMainContainer.style.marginTop = '16px';
    var elMainLayout = document.querySelector('.main-layout');
    elMainLayout.style.height = '655px';
    createImages()
    renderGallery()
}

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



