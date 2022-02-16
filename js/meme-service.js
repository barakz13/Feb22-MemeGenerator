'use strict';

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 };
var gImgs = [];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 35,
            align: 'center',
            color: 'white'
        },
        {
            txt: '',
            size: 35,
            align: 'center',
            color: 'white'
        }
    ]
};

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


function setLineTxt() {
    var elTxt = document.querySelector('.meme-text-input');
    var newTxt = elTxt.value;
    gCurrMemeLines.txt = newTxt;
}