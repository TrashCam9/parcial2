import React from 'react';
import Login from './components/Login';
import Books from './components/Books';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>}/> 
          <Route path="/home" element={<Books/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
