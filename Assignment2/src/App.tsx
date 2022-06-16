import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ApiState, user } from "./redux/reducers";
import UserCard from "./Components/UserCard";
import AppModal from "./Components/AppModal";
import SearchBar from "./Components/SearchBar";
import UserForm from "./Components/UserForm";
import { Row } from "antd";


const App = () => {
										const users = useSelector<ApiState, ApiState['users']>(
											(state) => state.users
										);
										const isLoaded = useSelector<ApiState>(
											(state) => state.isLoading
										);

										const [
											isEditingUser,
											setIsEditingUser,
										] = useState<Number | null>(null);

										const dispatch = useDispatch();

										const getUsers = async () => {
											const response = await fetch(
												'https://jsonplaceholder.typicode.com/users'
											);
											const users = await response.json();
											dispatch({type: 'SET_DATA', payload: users});
											dispatch({type: 'SET_ISLOADING', payload: true});
										};

										useEffect(() => {
											getUsers();
										}, []);

										const handleLikeUser = (id: number) => {
											dispatch({type: 'LIKE_USER', payload: id});
										};

										const handleDelete = (id: number) => {
											dispatch({type: 'DELETE_USER', payload: id});
										};

										const handleEdit = (id: number) => {
											setIsEditingUser(id);
										};

										const closeEditModal = () => {
											setIsEditingUser(null);
										};

										// Search Functionality
										const [searchTerm, setsearchTerm] = useState('');

										const getSearchTerm = (val: string) => {
											setsearchTerm(val);
										};
										// updating the user

										// const getUpdatedUser = (newUser: user) => {
										//   const newUsers = users.filter((item) => {
										//     if (item.id === newUser.id) {
										//       return newUser;
										//     } else {
										//       return item;
										//     }
										//   });
										//   dispatch({ type: "SET_DATA", payload: newUsers });
										// };

										if (!isLoaded) {
											return (
												<div className='spinner'>
													<div className='bounce1'></div>
													<div className='bounce2'></div>
													<div className='bounce3'></div>
												</div>
											);
										} else {
											return (
												<div>
													<SearchBar term={getSearchTerm} />

													<div className='App'>
														<Row justify='space-around'>
															{users.length > 0 &&
																users
																	.filter((item) => {
																		if (searchTerm == '') {
																			return item;
																		} else if (
																			item.name
																				.toLowerCase()
																				.includes(searchTerm.toLowerCase())
																		) {
																			return item;
																		}
																	})
																	.map((item) => {
																		const {id} = item;
																		return (
																			<div className='App-container'>
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
															<AppModal
																visible={isEditingUser != null}
																// user={users.filter((user) => user.id == isEditingUser)[0]}
																title='Edit User'
																closeModal={closeEditModal}
																footer={null}
															>
																<UserForm
																	user={
																		users.filter(
																			(user) => user.id == isEditingUser
																		)[0]
																	}
																	onSubmit={(updatedUser: user) => {
																		const updatedUsers = users.map((item) => {
																			if (item.id === updatedUser.id) {
																				return updatedUser;
																			} else {
																				return item;
																			}
																		});
																		dispatch({
																			type: 'SET_DATA',
																			payload: updatedUsers,
																		});
																		closeEditModal();
																		console.log(updatedUser);
																	}}
																/>
															</AppModal>
														</Row>
													</div>
												</div>
											);
										}
									};;;;
export default App;
