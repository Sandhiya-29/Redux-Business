import './App.css';
import LoginSignup from './Components/Loginsignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Multistep/Home.jsx';
<<<<<<< HEAD
import Dashboard from './Dashboard/Dashboard.jsx';
=======
>>>>>>> 32ea5d860631f1dce13631769c0986fe7be58d06




function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<LoginSignup />} />
            <Route path='/home' element={<Home />} />
<<<<<<< HEAD
            <Route path='/dashboard' element={<Dashboard />}/>
=======
         
>>>>>>> 32ea5d860631f1dce13631769c0986fe7be58d06
           
          </Routes>
        </Router>
    </div>
  );
}

export default App;
