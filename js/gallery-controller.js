'use strict';


function initGallery() {
    var elEditor = document.querySelector('.editor-container');
    elEditor.style.display = 'none';
    var elGallery = document.querySelector('.image-container');
    elGallery.style.display = 'block';
    var elMenuBtn = document.querySelector('.btn-menu');
    if (document.body.classList.contains("menu-open")) {
        document.body.classList.toggle("menu-open");
        elMenuBtn.style.display = 'block';
    }
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
    var elMenuBtn = document.querySelector('.btn-menu');
    elMenuBtn.style.display = 'none';
}



