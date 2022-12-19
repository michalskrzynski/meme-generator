import { useState } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  )
}

export default App
