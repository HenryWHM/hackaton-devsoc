import React from 'react'
import { useNavigate } from 'react-router-dom'

const SettingsPage = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div className={theme}>
      <h1 className="text-3xl font-bold underline">Settings Page</h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Home</button>
      <br />
      <button className="btn btn-primary" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default SettingsPage