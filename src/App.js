import './App.css';
import LoginSignup from './Components/Loginsignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Multistep/Home.jsx';




function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<LoginSignup />} />
            <Route path='/home' element={<Home />} />
         
           
          </Routes>
        </Router>
    </div>
  );
}

export default App;
