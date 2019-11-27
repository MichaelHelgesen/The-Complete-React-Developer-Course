
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA4UVZIYoXEX_gvKcLBQU1KhAQcQScIaaw",
    authDomain: "expensify-a0641.firebaseapp.com",
    databaseURL: "https://expensify-a0641.firebaseio.com",
    projectId: "expensify-a0641",
    storageBucket: "expensify-a0641.appspot.com",
    messagingSenderId: "335277010251",
    appId: "1:335277010251:web:a9bf7d3052737885f30cce"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref("expenses").push({
    description: "desc",
    note: "note",
    amount: 4,
    createdAt: ""
});

database.ref("expenses").push({
    description: "desc2",
    note: "note2",
    amount: 5,
    createdAt: ""
});

database.ref("expenses").push({
    description: "desc3",
    note: "note3",
    amount: 6,
    createdAt: ""
});





// database.ref("notes/-LuivuxkEmAmxdJf1WXi").remove()

// database.ref().on("value", (snapshot) =>{
//     const obj = snapshot.val()
//     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// });

// database.ref().update({
//     name: "Petter"
// })

// database.ref("location/city")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log("Error fetching data", e)
//     })


// database.ref().set({
//     name: "Michael Helgesen",
//     age: 39,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Halden",
//         countr: "Norway"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("This failed. ", e)
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Oslo"
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log("Data was removed")
//     }).catch((e) => {
//         console.log("Did not remove data", e);
//     });