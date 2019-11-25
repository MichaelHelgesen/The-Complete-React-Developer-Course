
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

database.ref().set({
    name: "Michael Helgesen",
    age: 39,
    isSingle: false,
    location: {
        city: "Halden",
        countr: "Norway"
    }
});

// database.ref().set("This is my data");

database.ref("age").set(27);
database.ref("location/city").set("Fredrikstad");
database.ref("attributes").set({
    height: 73,
    weight: 150
});