import * as firebase from "./node_modules/firebase";

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

firebase.database().ref().set({
    name: "Michael Helgesen"
});