import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //this will give the response in json format
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    return (
      <div className="App">
        <h1>Bear Bear</h1>
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}>             
        </ CardList>
      </div>
    );
  }
}

export default App;
