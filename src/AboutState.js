import React from 'react'

// how to user State in react application...
class AboutState extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            header: "State header",
            footer: "State footer"
        }

    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h1>{this.state.footer}</h1>
          </div>
        );
    }

}

export default AboutState;