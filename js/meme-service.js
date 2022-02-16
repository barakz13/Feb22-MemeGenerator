'use strict';

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 };
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

function setLineTxt() {
    var elTxt = document.querySelector('.meme-text-input');
    var newTxt = elTxt.value;
    gCurrMemeLines.txt = newTxt;
}