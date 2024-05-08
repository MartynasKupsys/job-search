// const array1 = [1, 2, 3, 4];
// const array2 = [1, 3, 4];

// const array = array1.filter((item) => {
//   return !array2.includes(item);
// });

// console.log(array);
let now = new Date();
let end = new Date(now.getFullYear() + 15, now.getMonth(), now.getDate());
// let daysInMonths = [];
// let interval = end - now;
let interval =
  end.getMonth() -
  now.getMonth() +
  12 * (end.getFullYear() - now.getFullYear());

let copyNow = new Date(JSON.parse(JSON.stringify(now)));

console.log("interval in month: ", interval);
console.log("copyNow: ", copyNow);

// for (let i = 0; i < interval; i++) {
//   copyNow.setMonth(copyNow.getMonth() + 1);
//   console.log(copyNow);
//   console.log(
//     new Date(copyNow.getFullYear(), copyNow.getMonth(), 0).getDate(),
//     copyNow.getMonth()
//   );
// }
// console.log(now, copyNow, end, interval);

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function daysOfMonths(j) {
  let nowDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayInMonthArray = [];

  for (let i = 0; i < 12; i++) {
    dayInMonthArray.push({
      id: i,
      month: months[i],
      days: daysInMonth(i + 1, nowDate.getFullYear() + j),
      year: nowDate.getFullYear() + j,
    });
  }

  return dayInMonthArray;
}

const firstYear = daysOfMonths(0);
console.log("days in Month", firstYear);

function calculateDaysOfMonth(year, month, days) {
  for (let i = 0; i < days; i++) {
    console.log(
      new Date(year, month, 1 + i),
      new Date(year, month, 1 + i).getDay()
    );
  }
}

console.log(calculateDaysOfMonth(2022, 0, 31));
console.log(calculateDaysOfMonth(2022, 1, 28));

// console.log("random year: ", new Date(2023, 0, 2));
// console.log("random year: ", new Date(2023, 1, 2));
// console.log("random year: ", new Date(2023, 2, 2));
// console.log("random year: ", new Date(2023, 3, 2));
// console.log("random year: ", new Date(2023, 4, 2));
// console.log("random year: ", new Date(2023, 5, 2));
// console.log("random year: ", new Date(2023, 6, 2));
// console.log("random year: ", new Date(2023, 7, 2));
// console.log("random year: ", new Date(2023, 8, 2));
// console.log("random year: ", new Date(2023, 9, 2));
// console.log("random year: ", new Date(2023, 10, 2));
// console.log("random year: ", new Date(2023, 11, 2));

// console.log("days in Month", daysOfMonths(2));
// console.log("days in Month", daysOfMonths(3));
// console.log("days in Month", daysOfMonths(4));
