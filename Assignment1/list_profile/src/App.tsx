import React, { Component } from "react";

type MyProps = {};

// type User=  {
//     id,	// The user's id
//     username,
//     name,
//     email,
//     phone,
//     website,
//     address: {
// 	  street, // Address line 1
// 	  suite, // Address line 2
// 	  city,
// 	  zipcode
//     },
//     company: {
// 	  name, // The name of company where the user works
//     }
//   }

type MyState = {
  data: { id: number }[];
  isLoaded: boolean; // like this
};
export default class App extends Component<MyProps, MyState> {
  state = { data: [], isLoaded: false };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json, isLoaded: true });
      });
  }
  render() {
    var { data, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loding..</div>;
    } else {
      return (
        <div>
          {data.length > 0 &&
            data.map((item) => {
              console.log(item);
              const { id, username } = item;
              return <h1>{id}</h1>;
            })}
        </div>
      );
    }
  }
}
