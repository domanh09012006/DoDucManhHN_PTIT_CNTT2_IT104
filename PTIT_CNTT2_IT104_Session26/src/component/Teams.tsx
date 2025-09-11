import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Teams() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/teams/index')
  }, [navigate])

  return (
    <div>
      <h1>Teams</h1>
      <p>Chuyen</p>
    </div>
  )
}

export default Teams
