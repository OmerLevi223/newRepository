'use strict'

var gKeywordSearchCountMap = { 'funny': 0, 'cartoon': 0, 'animal': 0, 'baby': 0, 'famous': 0 }

var gImgs = [{
    id: 1,
    url: 'img/1.jpg',
    keywords: ['famous']
},

{
    id: 2,
    url: 'img/2.jpg',
    keywords: ['animal']
},

{
    id: 3,
    url: 'img/3.jpg',
    keywords: ['animal', 'baby']
},

{
    id: 4,
    url: 'img/4.jpg',
    keywords: ['animal']
},

{
    id: 5,
    url: 'img/5.jpg',
    keywords: ['baby']
},

{
    id: 6,
    url: 'img/6.jpg',
    keywords: ['funny']
},

{
    id: 7,
    url: 'img/7.jpg',
    keywords: ['baby']
},

{
    id: 8,
    url: 'img/8.jpg',
    keywords: ['funny']
},

{
    id: 9,
    url: 'img/9.jpg',
    keywords: ['funny', 'baby']
},

{
    id: 10,
    url: 'img/10.jpg',
    keywords: ['funny', 'famous']
},

{
    id: 11,
    url: 'img/11.jpg',
    keywords: ['famous']
},

{
    id: 12,
    url: 'img/12.jpg',
    keywords: ['famous']
},

{
    id: 13,
    url: 'img/13.jpg',
    keywords: ['funny', 'famous']
},

{
    id: 14,
    url: 'img/14.jpg',
    keywords: ['famous']
},

{
    id: 15,
    url: 'img/15.jpg',
    keywords: ['funny', 'famous']
},

{
    id: 16,
    url: 'img/16.jpg',
    keywords: ['funny', 'famous']
},

{
    id: 17,
    url: 'img/17.jpg',
    keywords: ['famous']
},

{
    id: 18,
    url: 'img/18.jpg',
    keywords: ['cartoon']
},

];

function chooseImg(id){
    let imgSrc = gImgs[id-1].url
    return imgSrc
}

