import { useState } from 'react'
import weatherInput from "./components/weather";
import './App.css'
import Weather from './components/weather';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Weather App</h1>
    <Weather/>
    </>
  )
}

export default App
