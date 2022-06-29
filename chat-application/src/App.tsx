import './App.css';
import AuthContextProvider from './store/AuthContext';
import ScreensNavigator from './Navigation/ScreensNavigator';

function App() {
  return (
    <AuthContextProvider>
      <ScreensNavigator />
    </AuthContextProvider>
  );
}

export default App;
