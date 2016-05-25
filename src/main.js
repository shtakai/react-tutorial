import React from "react";
import ReactDOM from "react-dom";
import weapons from "./weapons.json";

class Weapon extends React.Component {
    render() {
        return (
            <li>
                {this.props.data.name} ( {this.props.data.sub} / {this.props.data.special} )
            </li>
        );
    }
}

class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            filterQuery: ""
        };
    }

    onChangeFilterQuery(event) {
        this.setState({
            filterQuery: event.target.value
        });
    }

    render() {
        return (
            <div className="weapons">
                <input onChange={this.onChangeFilterQuery.bind(this)}/>
                <ul>
                    {
                        weapons.filter(weapon => {
                            return weapon.name.indexOf(this.state.filterQuery) > -1
                                || weapon.sub.indexOf(this.state.filterQuery) > -1
                                || weapon.special.indexOf(this.state.filterQuery) > -1;
                        }).map((weapon, index) => {
                            return (<Weapon key={index} data={weapon}/>);
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
