// # Date exercises

// We have covered all the information you need for this task in our examples :)
// Of course, if you want to research more - you can do that too!

// Questions based on https://gist.github.com/nkabrown/44d45ceee28a2e29d3cb51ba2efaaa12

// 1. create a date object with today's date

const date = new Date();
console.log(date);

// 2. create a date object with the date of 1 January 2017

const date2017 = new Date(2017, 0, 1, 1);
// const date2017_1 = new Date(2017, 0, 2, 1);
console.log(date2017);
// console.log(Number(date2017));
// console.log(date2017_1);
// console.log(Number(date2017_1));
// console.log(Number(date2017_1) - Number(date2017));

// 3. find the number of days between today and 1 Jan 2017

const numOfMillisecondsFrom2017 = date - date2017;
const numOfSecondsFrom2017 = numOfMillisecondsFrom2017 / 1000;
const numOfMinutesFrom2017 = numOfSecondsFrom2017 / 60;
const numOfHoursFrom2017 = numOfMinutesFrom2017 / 60;
const numOfDaysFrom2017 = Math.round(numOfHoursFrom2017 / 24);
console.log(numOfDaysFrom2017);


// 4. create an array of objects for each day between today and 1 Jan 2017

//     Something like this: [ { date: "01.01.2017" }, { date: "02.01.2017" }, ..... ];

const dateOf2017InMs = Number(date2017);
const todayDateInMs = Number(new Date);

const arrOfDays = [];

for (let i = dateOf2017InMs; i < todayDateInMs; i = i + 86400000) {
    let obj = {};
    // first very short solution, but then you only get 1.1.2017, 2.1.2017; not 01.01.2017, 02.01.2017:
    // obj.date = new Date(i).getDate() + "." + (new Date(i).getMonth() + 1) + "." + new Date(i).getFullYear();
    
    let current = new Date(i);
    
    let day = current.getDate();
    if (day < 10) {
        day = "0" + day;
    };
    let month = current.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    };
    let year = current.getFullYear();

    obj.date = day + "." + month + "." + year;

    // task 5. randomly set either a true or a false a boolean property called `workout` on each date object in the array
    obj.workout = Boolean(Math.floor(Math.random() * 2));

    arrOfDays.push(obj);
};

console.log(arrOfDays);

// 6. is the workout for the first day of the year true?

const workedOutOnJanFirst = [];

for (i = 0; i < arrOfDays.length; i = i + 365) {
    if (arrOfDays[i].date.startsWith("3")) {
        workedOutOnJanFirst.push(arrOfDays[i + 1]);
    } else {
        workedOutOnJanFirst.push(arrOfDays[i]);
    };
};

console.log(workedOutOnJanFirst); 

// 7. is the workout for seven days ago true?

const workedOutSevenDaysAgo = arrOfDays[arrOfDays.length - 8];

console.log(workedOutSevenDaysAgo);