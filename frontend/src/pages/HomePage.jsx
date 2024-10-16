import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ mode }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={`text-3xl font-bold underline ${mode === 'dark' ? 'text-lightText' : 'text-darkText'}`}>
        Home Page
      </h1>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/schedule")}>Go to Schedule Page</button>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/settings")}>Go to Settings Page</button>
    </div>
  )
}

export default HomePage