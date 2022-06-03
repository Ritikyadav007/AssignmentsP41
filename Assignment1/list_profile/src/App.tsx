import React, { Component } from "react";
import UserCard from "./Components/UserCard";
import './App.css';

type MyProps = {};

export type user = {
    id : number;	// The user's id
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
	  street: string;
	  suite: string;
	  city: string;
	  zipcode: string;
    },
    company: {
	  name: string;
    }
  }


type MyState = {
  data: Array<user>;
  isLoaded: boolean; // like this
};
export default class App extends Component<MyProps, MyState> {
  state = { data: [] , isLoaded: false };

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
              return <div className="App-container"><UserCard key={id} user={item} /></div>;
            })}
        </div>
      );
    }
  }
}
