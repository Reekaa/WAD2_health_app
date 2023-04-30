/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserProvider } from './utils/userContext';
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import MainPage from './components/MainPage'
import CreateGoal from './components/CreateGoal'
import UpdateGoal from './components/UpdateGoal'
import Achievements from './components/Achievements'
import Goals from './components/Goals'

const App = () => {
  return (
    <BrowserRouter>
        <UserProvider>
          <Navbar />
            <Routes>
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/create" element={<CreateGoal />} />
                <Route path="/update" element={<UpdateGoal />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/goals" element={<Goals />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />          
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </UserProvider>
  </BrowserRouter>
  )
}

export default App;
