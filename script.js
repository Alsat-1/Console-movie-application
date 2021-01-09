'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			let firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
				secondQuestion = prompt('На сколько оцените его?', '');

			if (firstQuestion != null && secondQuestion != null && firstQuestion.length < 50 && firstQuestion != '' && secondQuestion != '') {
				personalMovieDB.movies[firstQuestion] = secondQuestion;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB(hidden) {
		if (!hidden) {
			console.log(personalMovieDB)
		}
	},
	toggleVisibleMyDB() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false
		} else {
			personalMovieDB.privat = true
		}
	},
	writeYourGenres() {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre != null && genre != '') {
				personalMovieDB.genres.push(genre);
			} else {
				console.log('Вы ввели некорректные данные');
				i--;
			}
		}

		personalMovieDB.genres.forEach((elem, number) => {
			console.log(`Любимый жанр ${number + 1} - это ${elem}`);
		})
	},
};