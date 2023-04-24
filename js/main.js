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
let secret = []

$(document).ready(start)

function start() {
    let x = Math.floor(Math.random()*words.length)
    word = words[x].answer.split('')
    for (i in word) {
        secret.push('*')
    }
    $('#question').text(words[x].question)
    $('#word').text(secret.join(' '))
}

function guessLetter() {

}