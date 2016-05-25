import React from "react";
import ReactDOM from "react-dom";
import weapons from "./weapons.json"

// raw js
console.log(weapons);

class App extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
            filterQuery : ""
        };
    }
    render() {
        return (
            <div className="weapons">
                <input />
                <ul>
                    {
                        weapons.map((weapon, index) => {
                            return (<li key={index}>{weapon.name}</li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    // React.createElement(App, {}),
    document.querySelector(".mainContainer")
);
