import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Authentication from './components/pages/Authentication'
import Game from './components/pages/Game'
import Home from './components/pages/Home'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/login/" Component={Authentication} />
        <Route path="/game/:token/" Component={Game} />
        <Route path="/home/" Component={Home} />

        <Route path="/*" Component={(): React.ReactElement => <Navigate to="/home" />} />
      </Routes>
    </Router>
  )
}

export default App
