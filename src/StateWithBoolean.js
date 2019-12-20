import React, { Component } from 'react'

class StateWithBoolean extends Component {
    constructor() {
        super();
        this.state = { displayInfo: false }
    }

    render() {
        const info = this.state.displayInfo ? (
            <div>
                <p>This is true information</p>
            </div>
        ) : null;

        return (
            <div>
                <p>{info}</p>

            </div>
        );
    }

}

export default StateWithBoolean;