
// Object destructuring


// const person = {
//     name: "MIkke",
//     age: 39,
//     location: {
//         city: "Halden",
//         temp: 8
//     }
// };

// const { name = "Anonumous", age } = person


// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-published"} = book.publisher

// console.log(publisherName);


// Array destructuring

const address = ["1299 S Juniper Street", "Halden", "Østfold", "1785"];
const [street, city, state, zip] = address
console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, smal, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);