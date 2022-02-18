'use strict';

var gImgs = [];

function onImgSelect(imgId) {
    var selectedImg = gImgs.find(img => img.id === imgId);
    var selectedImgUrl = selectedImg.url;
    gCurrImgUrl = selectedImgUrl;
    initEditor();

}

function createImages() {
    gImgs = [
        createImg(1, 'img/1.jpg', ['donald', 'trump']),
        createImg(2, 'img/2.jpg', ['dog', 'kiss']),
        createImg(3, 'img/3.jpg', ['dog', 'baby']),
        createImg(4, 'img/4.jpg', ['cat', 'laptop']),
        createImg(5, 'img/5.jpg', ['kid', 'success']),
        createImg(6, 'img/6.jpg', ['man', 'hands']),
        createImg(7, 'img/7.jpg', ['black', 'kid']),
        createImg(8, 'img/8.jpg', ['tell', 'more']),
        createImg(9, 'img/9.jpg', ['kid', 'sneaky']),
        createImg(10, 'img/10.jpg', ['obama', 'laugh']),
        createImg(11, 'img/11.jpg', ['basketball', 'kiss']),
        createImg(12, 'img/12.jpg', ['tzadik', 'hecht']),
        createImg(13, 'img/13.jpg', ['leonardo', 'cheers']),
        createImg(14, 'img/14.jpg', ['matrix', 'morpheus']),
        createImg(15, 'img/15.jpg', ['one', 'simply']),
        createImg(16, 'img/16.jpg', ['laugh', 'man']),
        createImg(17, 'img/17.jpg', ['putin', 'two']),
        createImg(18, 'img/18.jpg', ['buzz', 'woody'])
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
