import React, { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ApiState } from "./redux/reducers";

type MyProps = {};

// export type user = {
//   id: number; // The user's id
//   username: string;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//   };
//   company: {
//     name: string;
//   };
// };

// type MyState = {
//   data: Array<user>;
//   isLoaded: boolean; // like this
// };
const App = () => {
 const data = useSelector<ApiState, ApiState["data"]>((state)=> state.data);
 const isLoaded = useSelector<ApiState>((state)=> state.isLoading);
  // const [data, setData] = useState([]);
  // const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();



  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    dispatch({type: "SET_DATA", payload: users})
    dispatch({type: 'SET_ISLOADING', payload: true})
  };

  useEffect(() => {
    getUsers();
  },[]);

  const handleLikeUser = (id:number)=>{
    dispatch({type:'LIKE_USER', payload: id})
  }
 
  const handleDelete = (id:number) =>{

    
    // const copyData = Object.assign([], data);
    // copyData.splice(id,1);
    dispatch({type:'DELETE_USER',payload: id})
  }

  if (!isLoaded) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {data.length > 0 &&
          data.map((item) => {
            const { id } = item;
            return (
              <div className="App-container">
                <UserCard key={id} user={item} delete ={()=>handleDelete(id)} likeUser ={()=> handleLikeUser(id)}/>
              </div>
            );
          })}
      </div>
    );
  }

}
export default App;
