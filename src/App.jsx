import { useState } from 'react'
import React from 'react'
import Form from './components/Form'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Window from './components/Window'
import Lagabia from './components/Lagabia'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar/>
      <Lagabia/>
      
    </>
    
  );
}

export default App
