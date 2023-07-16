import { useState } from 'react'
import Home from './components/Home'
import Chat from './components/Chat'
import Success from './components/Success'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
