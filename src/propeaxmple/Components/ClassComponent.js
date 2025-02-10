import React, { Component } from "react";
import './myStyle.css'
export class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hi i am attending react class"

        }
    }
    changeMessage = () =>{

    }

    render() {
        let applyStyle = this.state.clicked?'heading2':'heading1'
        return(
            <div>
                <h1 className="heading">{this.state.message}</h1>
                <button onClick={this.changeMessage}>Click</button>
            </div>
        )

    }
} 