/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
window.onload = function () {
    const adv = document.querySelector('.promo__adv'),
        content = document.querySelector('.promo__content'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        films = document.querySelector('.promo__interactive-list');

    adv.remove();
    // content.style.cssText = 'width:calc(100%-300px);';
    content.style.width = 'calc(100% - 300px)';

    genre.textContent = 'Драма';

    bg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

    movieDB.movies.sort();
    films.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        films.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. ${item}
            <div class="delete"></div>
        </li>`;
    });
};
