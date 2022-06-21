import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<HomeScreen />
			</Provider>
		</>
	);
};
export default App;
