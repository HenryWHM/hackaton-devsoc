import React from 'react'
import { useNavigate } from 'react-router-dom'

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Settings Page
      </h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default SettingsPage