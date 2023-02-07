const word = document.getElementById('word'),
text = document.getElementById('text'),
scoreEl = document.getElementById('score'),
timeEl = document.getElementById('time'),
engameEl = document.getElementById('end-game'),
settingsBtn = document.getElementById('settings'),
settingsForm = document.getElementById('settings-form'),
difficulitySelect = document.getElementById('difficulity')

// list of Words
/* const words = ['sigh','tense','airplane','ball','pies','juice','warlike','bad',"north",'dependent','steer','highfalutin','superficial','quince','eight','feeble','admit','drag','loving'] */

// init word
let randomWord
// init score
let score = 0
// init time
let time = 10
// get random word


async function getWord(){
    const res = await fetch('https://random-word-api.herokuapp.com/all')
    const data = await res.json()
    const word = data[Math.floor(Math.random()*data.length)]
    console.log(word);
    return word
}

function addwordtoDOM(){
    randomWord = getWord()
    console.log(randomWord)
}
addwordtoDOM()
