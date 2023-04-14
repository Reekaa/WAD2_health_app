import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import CreateGoal from './components/CreateGoal'

function App() {
  return (
    <Router>
      <Navbar loggedin={true}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/creategoal" element={<CreateGoal />} />
      </Routes>
    </Router>
  )
}

export default App;
