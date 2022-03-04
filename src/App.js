import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //CONSTRUCTOR 
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }
  //ON_MOUNT  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {}
        )
      );
  }
  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  //RENDER
  render() {
    const {monsters, searchString} = this.state
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          placeholder="search monsters"
          type="search"
          onChange={onSearchChange}
        ></input>
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
