import React from 'react'
import { useNavigate } from 'react-router-dom'

const SchedulePage = ({ mode }) => {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className={`text-3xl font-bold underline ${mode === 'dark' ? 'text-lightText' : 'text-darkText'}`}>
        Schedule Page
      </h1>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default SchedulePage