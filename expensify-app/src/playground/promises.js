const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Mikke",
            age: 39
        });
    reject("Something went wrong");
    }, 1500)
});

promise.then((data) => {
    console.log("2", data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("this is my other promise");
        reject("Something went wrong");
        }, 1500)
    });
}).then((str) => {
    console.log("does this run?", str)
}).catch((error) => {
    console.log("error: ", error)
});

console.log("after");