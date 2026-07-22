import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a Nice Day.");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = (event) => {
    alert("I was clicked");
    console.log(event);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>

        <h1>React Event Examples</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increase}>
          Increment
        </button>

        <button onClick={this.decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;