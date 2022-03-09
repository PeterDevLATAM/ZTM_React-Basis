import React, { Component } from "react";
import Card from "../Card/Card";
import "./card-list.styles.css"
import "./card.styles.css"

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}