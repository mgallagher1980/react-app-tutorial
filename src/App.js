import React, { Component } from 'react';
import './App.css';
import KittenLoader from "./KittenLoader/KittenLoader";
import KittenList from "./KittenList/KittenList";

const kittenCount = 5;

class App extends Component {

  constructor() {
    super();

    this.state = {
      kittens: [],
      isLoading: false
    };
  }

  kittensLoaded = (data) => {
    this.setState({
      kittens: data.data,
      isLoading: false
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <KittenLoader count={kittenCount} onKittensLoaded={this.kittensLoaded} />{this.state.isLoading &&
          <p>Loading...</p>
          }
          <KittenList kittens={this.state.kittens}/>
        </header>
      </div>
    );
  }
}

export default App;
