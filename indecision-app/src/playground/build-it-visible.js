const appRoot = document.getElementById("app");

let visibility = false;

const toggleVisible = () => {
    visibility = !visibility;
    renderToDom();
}


const renderToDom = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisible}>
                {visibility ? "Hide details" : "Show details" }
            </button>
            {visibility && <p>This is the hidden text</p>}
        </div>
        
    )
    ReactDOM.render(template, appRoot);
}

renderToDom();