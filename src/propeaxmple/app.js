import React, { Component } from "react";
import CBCPropEx1 from "./propexample/CBCPropEx";

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <CBCPropEx1
          username="Anjani"
          age={21}
          hobbies={["Dancing" ,"Eating"]}
          address={{ Place: "Hyderabad" }}
          sendFun={function(){alert("hi")}}
        />
      </div>
    );
  }
}