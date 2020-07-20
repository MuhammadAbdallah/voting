import React, { Component } from "react";
import "../CssFiles/item.css";
import "../CssFiles/item.css";
class Counter extends Component {
  render() {
    return (
      <div>
        <div className=" text-center row item-view">
          <div className="col-3 term-st">
            <span className={this.getSpanClasses()}>
              {this.getSpanFormat()}
            </span>
          </div>
          <div className="col-6 item-st">{this.props.language.name}</div>
          <div className="col-3 term-st">
            <button
              className="btn btn-block"
              id="vote-btn"
              onClick={() => this.props.onIncrement(this.props.language)}
            >
              Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  getButtonClasses() {
    let classes = " text-center col-md-3 m-2 btn btn-success btn-md";
    return classes;
  }
  getSpanClasses() {
    let classes = "c-";
    classes += this.props.language.votes === 0 ? "warning" : "primary";
    return classes;
  }
  getSpanFormat() {
    return this.props.language.votes === 0 ? "Zero" : this.props.language.votes;
  }
}

export default Counter;
