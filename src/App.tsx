import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Authentication from './components/pages/Authentication'
import Game from './components/pages/Game'
import Home from './components/pages/Home'

const DefaultPage: React.FC = () => {
  return (
    <Navigate to="/" />
  )
}

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Authentication} />
        <Route path="/play" Component={Game} />
        <Route path="/" Component={Home} />
        <Route path="/*" Component={DefaultPage} />
      </Routes>
    </Router>
  )
}

export default App
