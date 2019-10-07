console.log("App.js is running");

var app = {
    title: "Title",
    subtitle: "Subtitle",
    options: ["one", "two"]
}


var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length ? "Here are your options" : "No options"}</p>
        <ol>
            <li>one</li>
            <li>two</li>
        </ol>
    </div>
);

var user = {
    name: "Mikke",
    age: 39,
    location: "Halden"
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);