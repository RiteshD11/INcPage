import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EvaluationPage from './page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EvaluationPage/>
       
    </>
  )
}

export default App
