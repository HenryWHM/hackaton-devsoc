import React from 'react'
import { useNavigate } from 'react-router-dom'

const SchedulePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Schedule Page
      </h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default SchedulePage