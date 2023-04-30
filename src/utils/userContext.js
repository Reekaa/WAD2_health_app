import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export function useAuth() {
   return useContext(UserContext);
}

export function UserProvider({ children }) {

  const [user, setUserData] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  const navigate = useNavigate();

  const value = {
    user,
    setUserData,
    isLoggedIn,
    setIsLoggedIn
  }

  useEffect(() => {
    try {
      const res = axios.get('http://localhost:3001/api/check', {
        method: 'GET',
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
      }

      })
      if (res.status === 200) {
        setIsLoggedIn(true);
        setUserData({
          id: res.data.id,
          username: res.data.username,
        });
        console.log(user);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error.response.data);
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [user, isLoggedIn, navigate])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}