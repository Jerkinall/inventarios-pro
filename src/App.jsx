import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryComponent } from './components/PrimaryComponent'
import { SecondaryComponent } from './components/SecondaryComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PrimaryComponent />
        <SecondaryComponent />
        </div>

    </>
  )
}

export default App
