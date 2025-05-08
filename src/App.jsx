import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Scripts } from "react-router-dom";

import Login from './components/Login.jsx'
import Register from './components/Signup.jsx';
import Signup from './components/Signup.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
