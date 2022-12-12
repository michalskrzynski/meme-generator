import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className="dflex">
        <div className="nav--left dflex">
          <img src="./logo.png" alt="" srcset="" />
          <div className="nav--brand">Meme Generator</div>
        </div>
        <div className="nav--right">
          React Course - Project 3
        </div>
      </nav>
      <main>
        <div className="content--grid">
          <div><input type="text" name="line1" id="memeLine1" placeholder='Shut up' /></div>
          <div><input type="text" name="line2" id="memeLine2" placeholder='and take my money'/></div>
          <div className="content--row2"><button>Get a new image</button></div>
          <div className="content--row3">Outcome image here</div>
        </div>
      </main>
    </div>
  )
}

export default App
