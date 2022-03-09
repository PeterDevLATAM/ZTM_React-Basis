import React, { Component } from "react";
import "./search-box.styles.css"

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box  ${this.props.className}`}
          placeholder= {this.props.placeholder}
          type="search"
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}
