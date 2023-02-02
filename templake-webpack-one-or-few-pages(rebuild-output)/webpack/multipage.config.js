const path = require('path');

result = {}

result.entry = {
    // Додавання нового файлу SJ, за необхідності можна додавати ще файли і в подальшому підєднувати до сторінки
    'main': path.join(__dirname, '../src/js/main.js'),
    // ПРИКЛАД-файл для другої сторінки!!! 'users': path.join(__dirname, '../src/js/users.js'),
    // Незабути створити SCSS та імпортувати відповідно в JS
}

result.pages = [
    // Додавання створеного JS файлу до сторінки
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/index.html'), },
    // ПРИКЛАД-друга сторінка!!!{ chunks: ['users'], page: 'pages/users.html', template: path.join(__dirname, '../src/pages/users.html') },
]

module.exports = result;