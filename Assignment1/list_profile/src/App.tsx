import React, { Component } from "react";
import ImageCard from "./Components/ImageCard";
import './App.css';

type MyProps = {};

type MyState = {
  data: any;
  isLoaded: boolean; // like this
};
export default class App extends Component<MyProps, MyState> {
  state = { data: [], isLoaded: false };

  componentDidMount() {
    const getUsers =async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      this.setState({data: users, isLoaded:true});
    }

    getUsers();
  }

  render() {
    var { data, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      )
    } else {
      return (
        <div className="App" >
          {data.length > 0 &&
            data.map((item) => {
              const { id } = item;
              return <div className="App-container"><ImageCard key={id} user={item} /></div>;
            })}
        </div>
      );
    }
  }
}
