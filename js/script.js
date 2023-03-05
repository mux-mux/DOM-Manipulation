/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
        films = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        inputedFilm = document.querySelector('.adding__input'),
        deleteIcon = document.querySelectorAll('.promo__interactive-item'),
        isFavorite = document.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let inpFilm = inputedFilm.value;
        let isFavorieFilm = isFavorite.checked;
        if (inpFilm.length > 21) {
            movieDB.movies.push(inpFilm.slice(0, 21) + '...');
        } else {
            movieDB.movies.push(inpFilm);
        }
        checkFavorite(isFavorieFilm);
        showMovieList(movieDB.movies);
    });

    deleteIcon.forEach((item, i) => {
        item.addEventListener('click', function (e) {
            console.log(item.parentElement);
            // e.target.parentElement.remove();
            // e.target.removeEventListener();
        });
    });


    adv.remove();
    // content.style.cssText = 'width:calc(100%-300px);';
    content.style.width = 'calc(100% - 300px)';

    genre.textContent = 'Драма';

    bg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

    function checkFavorite(isChecked) {
        (isChecked) ? console.log('Add fav film') : console.log('fav unchecked');;
    }
    function showMovieList(moviesList) {
        moviesList.sort();
        films.innerHTML = '';
        moviesList.forEach((item, i) => {
            films.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. ${item}
                <div class="delete"></div>
            </li>`;
        });
    }
    showMovieList(movieDB.movies);
};
