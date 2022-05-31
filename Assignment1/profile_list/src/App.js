import { Component } from 'react';
import './App.css';


class App extends Component() {
  state = {data: [], isLoaded: false}


  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json =>{
      this.setState({data: json, isLoaded: true})
      
    });
    
  }

  render(){
    var {data, isLoaded} = this.state;
    if(!isLoaded){
      return <div>Loding..</div>
    }
    else{
      return (
        <div className="App">
          {data.map(item =>(
          <h1>{item.username}</h1>
        ))}
        </div>
      );
    }  
  }
}

export default App;
