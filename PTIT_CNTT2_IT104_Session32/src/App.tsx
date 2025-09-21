import React from 'react'
import Profile from './user/Profile'
import ListUser from './user/ListUser'
import Counter from './user/Couter'
import RandomNumber from './user/RandomNumber'
import ChangeState from './user/ChangeState'
import ThemeSwitcher from './user/ThemeSwitcher'
import Register from './user/Register'
import Login from './user/Login'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App