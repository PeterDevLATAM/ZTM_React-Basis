import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMosters] = useState([]);
  console.log("render");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMosters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monster-search-box "}
      />
      {<CardList monsters={filteredMonsters} />}
    </div>
  );
};

/* class App extends Component {
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
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    

    return (
      <div className="App">
       <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={"search monsters"} className={"monster-search-box "}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
 */
export default App;
