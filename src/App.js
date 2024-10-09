import './App.css';
import LoginSignup from './Components/Loginsignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Multistep/Home.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import ResetPassword from './Components/Loginsignup/ResetPassword.jsx';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<LoginSignup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/resetpassword' element={<ResetPassword />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
