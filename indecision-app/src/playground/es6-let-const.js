var nameVar = "Mikke";
var nameVar = "test";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julei";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);



const fullName = "Per Helgesen";
let firstName;
if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);