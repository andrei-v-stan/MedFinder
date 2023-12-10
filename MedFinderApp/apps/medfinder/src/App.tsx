import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, NotFound, MedicinePage, SignUp, Login, Profile, Interpreter } from './pages';


const App: React.FC = () => {

  return (
    <div className="router_container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/medicine/:id/:name" element={<MedicinePage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/interpreter" element={<Interpreter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;



{/*
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('')
  useEffect(()=>{
    fetch('/api').then((res)=> res.text())
    .then(setGreeting);
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello</h1>
    </>
  )
}

export default App
*/}
