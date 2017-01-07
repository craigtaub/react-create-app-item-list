import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const jokeList = ['first', 'second'];

class App extends Component {
  constructor() {
      super();
      this.state = {
        jokeList
      }
  }

  getJoke() {
    return `joke ${Math.random()}`;
  }

  onClickHandler() { // first-class object so can be a param. 
      jokeList.push(this.getJoke());
      this.setState({
        jokeList
      });
  };

  render() {
    return (
      <div className="App">
        <List list={jokeList}/>
        <Button onClickHandler={this.onClickHandler} />
      </div>
    );
  }
}

export default App;

const List = ({list}) => (
    <div>
      {list.map((item) => {
          return <Item item={item}/>;
      })}

    </div>
);

const Item = ({item}) => (
    <div>
        <span>{item}</span>
    </div>
);

const Button = ({onClickHandler}) => (
    <div>
        <button onClick={onClickHandler}>Get Joke</button>
    </div>
);
