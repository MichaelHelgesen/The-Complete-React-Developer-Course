import React from "react";

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };
    handleAddOptions = (e) => {
        e.preventDefault();
        console.log("testing");
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

