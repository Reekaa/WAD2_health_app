/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// import { webRoutes } from './router';
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
import PrivateRoutes from './utils/PrivateRoutes'


const Root = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Container = styled.div`
  flex: 1 0 auto;
  width: 75%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <BrowserRouter>
    {/* <Router> */}
      {/* <Root> */}
        <UserProvider>
          <Navbar />
          {/* <Container> */}
            <Routes>
              {/* <Route element={<PrivateRoutes />}>/ */}
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/create" element={<CreateGoal />} />
                <Route path="/update" element={<UpdateGoal />} />
                <Route path="/achievements" element={<Achievements />} />
              {/* </Route> */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />          
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* {webRoutes.map(route => (
              <Route key={route.label} path="/" element={webRoutes[0].component}/>
            ))} */}
            </Routes>
          {/* </Container> */}
        </UserProvider>
      {/* </Root> */}
    {/* </Router> */}
  </BrowserRouter>
  )

}


export default App;
