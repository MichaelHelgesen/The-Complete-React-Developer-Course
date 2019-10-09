console.log("App.js is running");

const app = {
    title: "Title",
    subtitle: "Subtitle",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderToDom();
    }
};

const resetOptions = () => {
    app.options = [];
    renderToDom();
}

const numbers = [55, 101, 1000];

const appRoot = document.getElementById("app");

const renderToDom = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={resetOptions}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderToDom();