import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'


function App() {
  const [items, setItems ] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data)
     }
  }, [])

  return (
    <div className="container">
      <Header/>
    </div>
  ); 
}

export default App;
