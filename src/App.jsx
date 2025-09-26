import { useState } from 'react'
import AboutUs from './AboutUs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      <AboutUs />
    </div>
  )
}

export default App
