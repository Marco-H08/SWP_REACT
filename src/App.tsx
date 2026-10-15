import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card/>
      </div>
    </>
  )
}

export default App
