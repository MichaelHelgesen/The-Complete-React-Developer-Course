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


const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};

const {name: publisherName = "Self-published"} = book.publisher

console.log(publisherName);