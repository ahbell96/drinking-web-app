import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import AddPlayers from "../components/drinking-game/addPlayers";

export default class drinkGame extends Component {
  componentDidMount() {}

  state = {};

  render() {
    return (
      <div
        className={
          (styles.container,
          "flex flex-col justify-center align-center items-center h-screen")
        }
      >
        <p>Drink Game</p>
        <AddPlayers />
      </div>
    );
  }
}
