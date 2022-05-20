
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/projects';
import Groups from './routes/Groups'

function App() {
  const [loading, setLoading] = useState(true);
  
  const RedirectToLogin = () => {
    window.location.replace('http://localhost:5001/login');
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5001/whoami',
      withCredentials: true
    }).then(response => {
      if(response.data.user.nameID)
      {
        //setEmail(response.data.user.nameID);
       
        setLoading(false);
      }
      else 
      {
        RedirectToLogin();
      }
    }).catch(error => {
      RedirectToLogin();
  })
  }, []);

  return (
    <div className="App">
      {(loading) ? (
        <p>Loading...</p>
      ): (
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/projects' element={<Projects />} /> 
          <Route path='/groups' element={<Groups />} /> 
        </Routes>
      )}
    </div>
  );
}

export default App;
