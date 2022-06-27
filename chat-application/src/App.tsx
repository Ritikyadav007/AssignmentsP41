import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SignUp" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
