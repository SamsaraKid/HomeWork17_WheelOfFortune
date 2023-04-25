const words = [
    {question: 'Кто мяукает?', answer: 'кошка'},
    {question: 'Кто пищит?', answer: 'мышка'},
    {question: 'Кто гавкает?', answer: 'собака'},
    {question: 'Кто мычит?', answer: 'корова'},
    {question: 'Кто крякает?', answer: 'утка'},
    {question: 'Кто воет?', answer: 'волк'},
    {question: 'Кто поёт по утрам?', answer: 'петух'},
    {question: 'Кто каркает?', answer: 'ворона'},
    {question: 'Кто квакает?', answer: 'лягушка'},
    {question: 'Кто жужжит?', answer: 'пчела'}
]

let word = []
let questNum = 0
let secret = []
let scores = 0
let moveScores = 0

$(document).ready(start)

// подготовка игры
function start() {
    questNum = Math.floor(Math.random()*words.length)
    word = words[questNum].answer.toUpperCase().split('')
    for (i in word) {
        secret.push('*')
    }
    $('#question').text(words[questNum].question)
    $('#word').text(secret.join(' '))
    nextMove()
    $('#hatOnHost, #piculesOnHost, #glassesOnHost, #prizes button, #prizesWrap h2')
            .prop('hidden', true)
}

// крутим колесо
function spinWheel() {
    if ($('#wheelWrap img').classList !== 'spinWheel') {
        $('#wheelWrap img').addClass('spinWheel')
    }
    setTimeout(function (){
        $('#wheelWrap img').removeClass('spinWheel')
        moveScores = Math.floor(Math.random()*15+1)*50
        makeGuess()
    },3000)
}

// угадываем букву
function guess() {
    let letter = $('#guessLetter').val().toUpperCase()
    for (w in word) {
        if (letter == word[w]){
            secret[w] = letter
            scores += moveScores
            $('#scores').text('У вас ' + scores + ' очков')
        }
    }
    $('#word').text(secret.join(' '))
    nextMove()
    check()
}

// проверяем слово
function check() {
    if (secret.indexOf('*') == -1) {
        $('#moveScores').text('Вы победили')
    }
}

// подготовка к следующему ходу
function nextMove() {
    $('#guessLetter, #submitLetter, #guessWord, #submitWord')
            .prop('disabled', true)
    $('#spin').prop('disabled', false)
    $('#moveScores').text('Крутите барабан')
    $('#guessLetter').val('')
    $('#guessWord').val('')
}

// подготовка к следующему угадыванию
function makeGuess() {
    $('#guessLetter, #submitLetter, #guessWord, #submitWord')
            .prop('disabled', false)
    $('#spin').prop('disabled', true)
    $('#moveScores').text('На барабане ' + moveScores + ' очков')
}

$('#spin').click(spinWheel)
$('#submitLetter').click(guess)
