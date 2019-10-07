"use strict";

console.log("App.js is running");

var app = {
    title: "Title",
    subtitle: "Subtitle",
    options: ["one", "two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "one"
        ),
        React.createElement(
            "li",
            null,
            "two"
        )
    )
);

var user = {
    name: "Mikke",
    age: 39,
    location: "Halden"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
