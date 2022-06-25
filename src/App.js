import './App.css';
import Projects from "./components/Projects"
import Home from "./components/Home"
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Projects/> */}
    </div>
  );
}

export default App;