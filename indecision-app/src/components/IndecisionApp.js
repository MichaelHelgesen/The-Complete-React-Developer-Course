import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        })
    )};

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];    
        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };

    handleAddOptions = (option) => {
        if (!option ) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exsits";
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

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

    

    render() {
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subTitle} />
                    <div className="container">
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}