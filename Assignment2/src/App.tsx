import React, { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ApiState } from "./redux/reducers";
import UserFormModal from "./Components/UserFormModal";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const users = useSelector<ApiState, ApiState["users"]>(
    (state) => state.users
  );
  const isLoaded = useSelector<ApiState>((state) => state.isLoading);

  const [isEditingUser, setIsEditingUser] = useState<Number | null>(null);

  const dispatch = useDispatch();

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    dispatch({ type: "SET_DATA", payload: users });
    dispatch({ type: "SET_ISLOADING", payload: true });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleLikeUser = (id: number) => {
    dispatch({ type: "LIKE_USER", payload: id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleEdit = (id: number) => {
    setIsEditingUser(id);
  };

  const closeEditModal = () => {
    setIsEditingUser(null);
  };

  // Search Functionality
  const [searchTerm, setsearchTerm] = useState("");

  const getSearchTerm = (val:string) =>{
    setsearchTerm(val)
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
      <div>
        <p>
          <SearchBar term={getSearchTerm} />
        </p>
        <div className="App">
          {users.length > 0 &&
            users
              .filter((item) => {
                if (searchTerm == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                const { id } = item;
                return (
                  <div className="App-container">
                    <UserCard
                      key={id}
                      user={item}
                      deleteUser={() => handleDelete(id)}
                      likeUser={() => handleLikeUser(id)}
                      editUser={() => handleEdit(id)}
                    />
                  </div>
                );
              })}
          <UserFormModal
            visible={isEditingUser != null}
            user={users.filter((user) => user.id == isEditingUser)[0]}
            // onSubmitChange={(updatedUser) => {}
            closeModal={closeEditModal}
          />
        </div>
      </div>
    );
  }
};
export default App;
