import { useState } from 'react'
import './App.css'
// import "./service/firebase"
import Search from './components/Search/Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Search/>
    </div>
  )
}

export default App
