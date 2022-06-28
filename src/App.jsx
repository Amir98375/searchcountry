import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { SearchBar } from './component/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <SearchBar/>
    </div>
  )
}

export default App
