import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emojis from './emojis'
import Search from './search'


function App() {
  const [searchInput, setSearchInput] = useState("")
  return (
    <>
      <Search setSearchInput={setSearchInput}/>
      <Emojis searchInput={searchInput}/>
    </>
  )
}

export default App
