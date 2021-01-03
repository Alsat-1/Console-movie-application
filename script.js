const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
	secondQuestion = prompt('На сколько оцените его?', ''),
	thirdQuestion = prompt('Один из последних просмотренных фильмов?', ''),
	fourthQuestion = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;

console.log(personalMovieDB);