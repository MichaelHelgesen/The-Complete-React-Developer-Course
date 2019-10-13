class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const options = ["Thing one", "Thing two", "Thing four"]
        return (
            <div>
                <Header title={title} subtitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("handlePick");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
};

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }

            </div>  
        )
    }
};

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    handleAddOptions(e) {
        e.preventDefault();
        const inputValue = e.target.elements.option.value;

        inputValue && alert(inputValue);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
            
        )
    }
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));