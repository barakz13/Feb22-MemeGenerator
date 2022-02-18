'use strict';


function initGallery() {
    var elEditor = document.querySelector('.editor-container');
    elEditor.style.display = 'none';
    var elGallery = document.querySelector('.image-container');
    elGallery.style.display = 'block';
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

function toggleMenu() {
    document.body.classList.toggle("menu-open");
}



