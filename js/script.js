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
document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelector('.promo__adv'),
        content = document.querySelector('.promo__content'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        films = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        inputedFilm = addForm.querySelector('.adding__input'),
        deleteIcon = document.querySelectorAll('.delete'),
        isFavorite = addForm.querySelector('[type="checkbox"]');    //addForm

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let inpFilm = inputedFilm.value;
        const isFavorieFilm = isFavorite.checked;
        if (inpFilm && inpFilm.trim() > 0) {
            if (inpFilm.length > 21) {
                inpFilm = `${inpFilm.slice(0, 22)}...`;
            }
            movieDB.movies.push(inpFilm);
            checkFavorite(isFavorieFilm);
            sortArr(movieDB.movies);
            showMovieList(movieDB.movies, films);
            e.target.reset();
        }                                      //add reset
    });

    const deleteAdv = (block) => {
        block.remove();
        content.style.width = 'calc(100% - 300px)';
    }

    const makeChanges = () => {
        genre.textContent = 'Драма';
        bg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
    }

    function checkFavorite(isChecked) {
        (isChecked) ? console.log('Add fav film') : console.log('fav unchecked');;
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    function showMovieList(moviesList, parent) {
        sortArr(moviesList);
        parent.innerHTML = '';
        moviesList.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. ${item}
                <div class="delete"></div>
            </li>`;
        });

        deleteIcon.forEach((item, i) => {
            item.addEventListener('click', function (e) {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                // e.target.removeEventListener();
                showMovieList(moviesList, parent);       //update films count
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    showMovieList(movieDB.movies, films);
});
