import React, { Component } from 'react'
import DemoClass from './DemoClass'
export default class MainSections extends Component {
    render() {
        let myStyle = {
            fontSize: 35,
            fontFamily: 'Courier',
            color: 'Red'
        }

        return (
            <div>
                <h1 style={myStyle}>
                    This is my Main Content Window
                </h1>
                <DemoClass></DemoClass>
            </div>
        )
    }
}
