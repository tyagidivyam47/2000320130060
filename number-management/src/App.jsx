import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Numbers from './Numbers'

function App() {
  const [count, setCount] = useState(0)
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('url');
  // console.log(myParam)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/numbers" />} />
        <Route path="/numbers" element={<Numbers params={myParam} />} />
      </Routes>
    </div>
  )
}

export default App
