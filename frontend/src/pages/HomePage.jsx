import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Home Page
      </h1>
      <button className="btn btn-primary" onClick={() => navigate("/schedule")}>Go to Schedule Page</button>
      <button className="btn btn-primary" onClick={() => navigate("/settings")}>Go to Settings Page</button>
    </div>
  )
}

export default HomePage