class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // Do nothing
        }
        
        
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
        
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        })
    )}

    handlePick() {
       alert(
            this.state.options[
                Math.floor(Math.random() * this.state.options.length)
            ]
        );
    }

    handleAddOptions(option) {
        if (!option ) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exsits";
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    };

    render() {
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOptions={this.handleAddOptions}
                />
            </div>
        )
    }
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => {
        return (
            <div>
                <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        )
};

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove all</button>
                {props.options.length === 0 && <p>Please add an option to get started!</p>}
                {
                    props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption} 
                        />
                    ))
                }

            </div>  
        )
};

const Option = (props) => {
        return (
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                >
                    Remove
            </button>
            </div>
        )
};

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptions(e) {
        e.preventDefault();
        const inputValue = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(inputValue)

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = "";
        }

    }

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}    
            <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
            
        )
    }
};

ReactDOM.render(<IndecisionApp options={["Devils Den", "Halden"]}/>, document.getElementById("app"));

