// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucumber", "Radish"];

// console.log([...fruits, ...vegetables]);

// const developer = {
//   salary: 100000,
//   experience: 4.5,
//   techStack: ["Vue", "HTML", "CSS"],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   },
// };

// console.log(developer.salary);
// console.log(developer.lookingForWork);

// developer.doubleSalary();

// console.log(developer.salary);
// console.log(developer.lookingForWork);
// console.log(developer);

// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// export const multiply = (num1, num2) => {
//   // let total = 0;

//   // for (let i = 0; i < num1; i++) {
//   //   total += num2;
//   // }

//   // return total;

//   return num1 * num2;
// };

// import axios from "axios";
// const axios = require("axios");

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((number) => number * number);

// console.log(squares);

// const favoriteFood = "sushi";
// const goodFoods = {
//   [favoriteFood]: true,
// };

// console.log(goodFoods);

// setTimeout(() => {
//   console.log("I will print 2 seconds after the program starts");
// }, 2000);

// const interval = setInterval(() => {
//   console.log("I will print every 2 after the program starts");
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 11000);
// clearInterval(interval);

// const url = "http://localhost:3000/jobs";

// const fetchJobsV1 = () => {
//   axios.get(url).then((response) => {
//     console.log(response.data);
//   });
// };

// axios.get(url).then((response) => console.log(response.data));
// const fetchJobsV2 = async () => {
//   const response = await axios.get(url);
//   console.log(response.data);
// };

// fetchJobsV2();

// fetchJobsV1();

// const sushi = [
//   "Tuna",
//   "Salmon",
//   "Yellowtail",
//   "Eel",
//   "Shrimp",
//   "Octopus",
//   "Uni",
// ];

// console.log(sushi.slice(0, 2)); // includes the start, and end will be excluded
// console.log(sushi.slice(2, 4));
// console.log(sushi.slice(4, 6));
// console.log(sushi.slice(6, 8));

// Arrays - order
// Object - association
// Set - uniqueness

// const numbers = new Set();

// numbers.add(5);
// numbers.add(10);
// numbers.add(15);

// numbers.add(5);
// numbers.add(15);

// numbers.add(25);

// console.log(numbers);

// const numbers = [1, 3, 5, 7, 2, 9, 11, 6];

// const newNumbers = numbers.filter((number) => number > 6);

// console.log(newNumbers);

// const jobs = [
//   { title: "Angular Developer", organization: "Microsoft" },
//   { title: "Programmer", organization: "Google" },
//   { title: "Developer", organization: "Microsoft" },
// ];

// console.log(jobs.filter((job) => job.organization === "Microsoft"));
// import { ref } from "vue";
const { ref, reactive, computed, toRef, toRefs } = require("vue");

// const person = reactive({
//   firstName: "Boris",
//   lastName: "Paskhaver",
// });

const person = {
  firstName: "Boris",
  lastName: "Paskhaver",
};

// const firstName = toRef(person, "firstName");
// const lastName = toRef(person, "lastName");

// const { firstName, lastName } = person; // dont get reactive properties, loses it

// const { firstName, lastName } = toRefs(person);

const refPerson = toRefs(reactive(person));

// console.log(person.firstName);
// console.log(refPerson.firstName);
// console.log(refPerson.lastName);

// const title = computed(
//   () => `${person.firstName} ${person.lastName} the Great`
// );

// const title = computed(() => `${firstName.value} ${lastName.value} the Great`);
// const title = computed(() => `${firstName.value} ${lastName.value} the Great`);

// const titleLength = computed(() => title.value.length);

// console.log(title.value, titleLength.value);

// person.firstName = "Napoleon";
// console.log(title.value, titleLength.value);

// person.lastName = "Griffin";
// console.log(title.value, titleLength.value);

// let name = "Boris";
// let title = name + " the Great";

// console.log(title);

// name = "Peter";

// console.log(title);

// const name = ref("Boris");
// const title = computed(() => name.value + " the Great");

// console.log(title.value);

// name.value = "Peter";

// console.log(title.value);

// let a = ref(1);
// let b = ref(2);

// // let c = ref(a.value + b.value); // ref(3)
// let c = computed(() => a.value + b.value);
// // console.log(a.value);
// // console.log(b.value);

// console.log(c.value);

// a.value = 10;

// console.log(c.value);

// { value: 1 }

// let c = a + b;

// console.log(c);

// a = 8;
// b = 12;
// console.log(c);
