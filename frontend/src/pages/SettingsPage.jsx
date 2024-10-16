import React from 'react'
import { useNavigate } from 'react-router-dom'

const SettingsPage = ({ mode, toggleMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-darkBackground text-lightText' : 'bg-lightBackground text-darkText'}`}>
      <h1 className={`text-3xl font-bold underline ${mode === 'dark' ? 'text-lightText' : 'text-darkText'}`}>Settings Page</h1>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/")}>Home</button>
      <br />
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={toggleMode}>
        {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default SettingsPage