import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="text-primary">Voting App </h1>
        </div>
        <div className="container">
          {this.props.langauges.map((language) => (
            <Counter onIncrement={this.props.onIncrement} language={language} />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
