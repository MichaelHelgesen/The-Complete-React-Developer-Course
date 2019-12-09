
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:335277010251:web:a9bf7d3052737885f30cce"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// //child_removec
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref("expenses")
// //     .once("value")
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })

// //         //console.log(expenses);
// //     });

// database.ref("expenses").push({
//     description: "desc",
//     note: "note",
//     amount: 4,
//     createdAt: ""
// });



// // var starCountRef = firebase.database().ref('expenses');
// // starCountRef.on('value', function(snapshot) {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //           id: childSnapshot.key,
// //           ...childSnapshot.val()
// //       })
      
// //   })
// //   console.log(expenses);
// // });



// // database.ref("notes/-LuivuxkEmAmxdJf1WXi").remove()

// // database.ref().on("value", (snapshot) =>{
// //     const obj = snapshot.val()
// //     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// // });

// // database.ref().update({
// //     name: "Petter"
// // })

// // database.ref("location/city")
// //     .once("value")
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log("Error fetching data", e)
// //     })


// // database.ref().set({
// //     name: "Michael Helgesen",
// //     age: 39,
// //     stressLevel: 6,
// //     job: {
// //         title: "Software developer",
// //         company: "Google"
// //     },
// //     location: {
// //         city: "Halden",
// //         countr: "Norway"
// //     }
// // }).then(() => {
// //     console.log("Data is saved");
// // }).catch((e) => {
// //     console.log("This failed. ", e)
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     "job/company": "Amazon",
// //     "location/city": "Oslo"
// // });

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log("Data was removed")
// //     }).catch((e) => {
// //         console.log("Did not remove data", e);
// //     });