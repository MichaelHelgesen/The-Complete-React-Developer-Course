const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: "Mikke",
        //     age: 39
        // });
    reject("Something went wrong");
    }, 1500)
});

promise.then((data) => {
    console.log("2", data);
}).catch((error) => {
    console.log("error: ", error)
});

console.log("after");