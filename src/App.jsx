import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://img.icons8.com/?size=512&id=DXHsljPIgKyV&format=png" target="_blank">
          <img src="https://img.icons8.com/?size=512&id=DXHsljPIgKyV&format=png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://img.icons8.com/?size=512&id=10000&format=png" target="_blank">
          <img src="https://img.icons8.com/?size=512&id=10000&format=png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>test de REACT 1.0</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click en el logo de vite o REACT para ir a los links
      </p>
    </>
  )
}

export default App
