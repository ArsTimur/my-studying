//  Интересные задачки


// const films = [{
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     const sorted = arr.filter(item => item.rating >= 8)
//     arr.map(item => item.name);
//     return sorted;
// }

// showGoodFilms(films);


// function showListOfFilms(arr) {
//     const sortedL = arr.map(item => item.name);
//         console.log(sortedL.join(', '))
// }
// showListOfFilms(films)

// function setFilmsIds(arr) {
//     const filmsWithId = arr.map((films, i) => {
//         return Object.assign({}, films, { id: i });
//       });

//       return filmsWithId;
// }

// setFilmsIds(films)

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0 ? true : false)

// }
// checkFilms(tranformedArray)


// const funds = [
//     { amount: -1400 },
//     { amount: 2400 },
//     { amount: -1000 },
//     { amount: 500 },
//     { amount: 10400 },
//     { amount: -11400 },
// ]
// const getPositiveIncomeAmount = (data) => {
//     const positive = data.filter(item => item.amount >= 0);
//     const result = positive.map(item => item.amount).reduce((sum, curr) => sum + curr)
//     console.log(result)

// }
// getPositiveIncomeAmount(funds)

// const getTotalIncomeAmount = (data) => {
//     if (data.filter(item => item.amount > 0)) {
//         const minuses = data.map(item => item.amount).reduce((sum, curr) => sum + curr)
//         console.log(minuses)
//     } else {
//         console.log(getPositiveIncomeAmount(funds))
//     }
// };
// getTotalIncomeAmount(funds);


//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=




// Возможно верхние задачи и нижние совпадают



















//  Интересные задачки


// const films = [{
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     const sorted = arr.filter(item => item.rating >= 8)
//     arr.map(item => item.name);
//     return sorted;
// }

// showGoodFilms(films);


// function showListOfFilms(arr) {
//     const sortedL = arr.map(item => item.name);
//         console.log(sortedL.join(', '))
// }
// showListOfFilms(films)

// function setFilmsIds(arr) {
//     const filmsWithId = arr.map((films, i) => {
//         return Object.assign({}, films, { id: i });
//       });

//       return filmsWithId;
// }

// setFilmsIds(films)

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0 ? true : false)

// }
// checkFilms(tranformedArray)


// const funds = [
//     { amount: -1400 },
//     { amount: 2400 },
//     { amount: -1000 },
//     { amount: 500 },
//     { amount: 10400 },
//     { amount: -11400 },
// ]
// const getPositiveIncomeAmount = (data) => {
//     const positive = data.filter(item => item.amount >= 0);
//     const result = positive.map(item => item.amount).reduce((sum, curr) => sum + curr)
//     console.log(result)

// }
// getPositiveIncomeAmount(funds)

// const getTotalIncomeAmount = (data) => {
//     if (data.filter(item => item.amount > 0)) {
//         const minuses = data.map(item => item.amount).reduce((sum, curr) => sum + curr)
//         console.log(minuses)
//     } else {
//         console.log(getPositiveIncomeAmount(funds))
//     }
// };
// getTotalIncomeAmount(funds);