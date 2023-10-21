import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Authentication from './components/pages/Authentication'
import Home from './components/pages/Home'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Authentication} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  )
}

export default App
