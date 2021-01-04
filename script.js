'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	let firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
		secondQuestion = prompt('На сколько оцените его?', '');

	if (firstQuestion != null && secondQuestion != null && firstQuestion.length < 50 && firstQuestion != '' && secondQuestion != '') {
		personalMovieDB.movies[firstQuestion] = secondQuestion;
	} else {
		i--;
	}
};

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
};

console.log(personalMovieDB);