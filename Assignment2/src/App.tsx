import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ApiState } from './store/reducers';
import Loader from './Components/Loader/Loader';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
	const users = useSelector<ApiState, ApiState['users']>(
		(state) => state.users
	);
	const isLoaded = useSelector<ApiState>((state) => state.isLoading);
	const dispatch = useDispatch();
	const getUsers = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		dispatch({ type: 'SET_DATA', payload: users });
		dispatch({ type: 'SET_ISLOADING', payload: true });
	};

	useEffect(() => {
		getUsers();
	}, []);

	if (!isLoaded) {
		return <Loader />;
	} else {
		return <HomeScreen users={users} />;
	}
};
export default App;
