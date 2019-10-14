class VisibilityToggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    };

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? "Hide details" : "Show details" }
            </button>
            {this.state.visibility && <p>This is the hidden text</p>}
        </div>
        )
    }

}



ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// render() {
//     return (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.handleToggleVisibility}>
//             {visibility ? "Hide details" : "Show details" }
//         </button>
//         {visibility && <p>This is the hidden text</p>}
//     </div>
//     )
// }


// const appRoot = document.getElementById("app");

// let visibility = false;

// const toggleVisible = () => {
//     visibility = !visibility;
//     renderToDom();
// }


// const renderToDom = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisible}>
//                 {visibility ? "Hide details" : "Show details" }
//             </button>
//             {visibility && <p>This is the hidden text</p>}
//         </div>
        
//     )
//     ReactDOM.render(template, appRoot);
// }

// renderToDom();

